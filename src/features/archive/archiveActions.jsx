import { toastr } from "react-redux-toastr";
import {  FETCH_ARCHIVES } from './archiveConstants';
import { createNewArchive } from '../../app/common/util/helpers';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import moment from 'moment';
import firebase from '../../app/config/firebase';






export const createArchive = (archive) => {
 
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newArchive = createNewArchive(user, photoURL, archive);
    try {
      await firestore.add(`Archives`, newArchive);
      toastr.success('Success', 'Event has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
}

export const updateArchive = (archive) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    if (archive.date !== getState().firestore.ordered.Archives[0].date) {
      archive.date = moment(archive.date).toDate();
    }
    try {
      await firestore.update(`Archives/${archive.id}`, archive);
      toastr.success('Success', 'Event has been updated');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong');
    }
  };
}




export const publishToggle = (published, ArchiveId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const message = published
    ? 'Are you sure you want to publish the event?'
    : 'Are you sure you want to UN-publish the event?';
  try {
    toastr.confirm(message, {
      onOk: () =>
        firestore.update(`Archives/${ArchiveId}`, {
          published: published
        })
    });
  } catch (error) {
    console.log(error);
  }
};
export const addArchiveComment = (archiveId, values, parentId) => 
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const user = firebase.auth().currentUser;
    let newComment = {
      parentId: parentId,
      displayName: profile.displayName,
      photoURL: profile.photoURL || '/assets/user.png',
      uid: user.uid,
      text: values.comment,
      date: Date.now()
    }
    try {
      await firebase.push(`archive_chat/${archiveId}`, newComment)
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Problem adding comment')
    }
  }

  export const getArchivesForDashboard = (lastArchive) => async(dispatch, getState) =>{
    //let today =new Date(Date.now());
    const firestore = firebase.firestore();
    const archivesQuery = firestore.collection('Archives');
    
    try{
      dispatch(asyncActionStart());
      let startAfter = lastArchive && await firestore.collection('Archives').doc(lastArchive.id).get();

      let query;

      lastArchive?
      (query = archivesQuery.orderBy('date').startAfter(startAfter).limit(2))
      :(query = archivesQuery.orderBy('date').limit(2))

      let querySnap=await query.get();
      if (querySnap.docs.length === 0) {
        dispatch(asyncActionFinish());
        return querySnap;
      }

      let archives = [];
      for(let i=0;i<querySnap.docs.length;i++)
      {
        let arc ={...querySnap.docs[i].data(), id:querySnap.docs[i].id};
        archives.push(arc);
      }
      dispatch({type: FETCH_ARCHIVES, payload: {archives}});
      dispatch(asyncActionFinish());
      return querySnap;
    }
    catch(error){
      dispatch(asyncActionError());
      console.log(error)
    }
    

}

