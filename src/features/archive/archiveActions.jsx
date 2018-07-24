import { toastr } from 'react-redux-toastr';
import { FETCH_ARCHIVES } from './archiveConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
//import { fetchSampleData } from '../../app/data/mockAPI';
import { createNewArchive } from '../../app/common/util/helpers';
import moment from 'moment';
import firebase from '../../app/config/firebase';

export const createArchive = archive => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newArchive = createNewArchive(user, photoURL, archive);
    try {
      let createdArchive = await firestore.add(`archives`, newArchive);
      await firestore.set(`archive_attendee/${createdArchive.id}_${user.uid}`, {
        archiveId: createdArchive.id,
        userUid: user.uid,
        archiveDate: archive.date,
        host: true
      });
      toastr.success('Success', 'Archive has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const updateArchive = archive => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    if (archive.date !== getState().firestore.ordered.archives[0].date) {
      archive.date = moment(archive.date).toDate();
    }
    try {
      await firestore.update(`archives/${archive.id}`, archive);
      toastr.success('Success', 'Archive has been updated');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const cancelToggle = (cancelled, archiveId) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const message = cancelled
    ? 'Are you sure you want to cancel the archive?'
    : 'This reactivate the archive - are you sure?';
  try {
    toastr.confirm(message, {
      onOk: () =>
        firestore.update(`archives/${archiveId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};

export const getArchivesForDashboard = lastArchive => async (dispatch, getState) => {
  let today = new Date(Date.now());
  const firestore = firebase.firestore();
  const archivesRef = firestore.collection('archives');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastArchive &&
      (await firestore
        .collection('archives')
        .doc(lastArchive.id)
        .get());
    let query;

    lastArchive
      ? (query = archivesRef
          .where('date', '>=', today)
          .orderBy('date')
          .startAfter(startAfter)
          .limit(2))
      : (query = archivesRef
          .where('date', '>=', today)
          .orderBy('date')
          .limit(2));
    
    let querySnap = await query.get();

    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }

    let archives = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      archives.push(evt);
    }
    dispatch({ type: FETCH_ARCHIVES, payload: { archives } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
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