export const getUserArchives = (userUid, activeTab) => async (dispatch, getState) => {
  dispatch(asyncActionStart());
  const firestore = firebase.firestore();
  const today = new Date(Date.now());
  let archivesRef = firestore.collection('archive_attendee');
  let query;
  switch (activeTab) {
    case 1: // past archives
      query = archivesRef
        .where('userUid', '==', userUid)
        .where('archiveDate', '<=', today)
        .orderBy('archiveDate', 'desc');
      break;
    case 2: // future archives
      query = archivesRef
        .where('userUid', '==', userUid)
        .where('archiveDate', '>=', today)
        .orderBy('archiveDate');
      break;
    case 3: // hosted archives
      query = archivesRef
        .where('userUid', '==', userUid)
        .where('host', '==', true)
        .orderBy('archiveDate', 'desc');
      break;
    default:
      query = archivesRef.where('userUid', '==', userUid).orderBy('archiveDate', 'desc');
  }
  try {
    let querySnap = await query.get();
    let archives = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = await firestore
        .collection('archives')
        .doc(querySnap.docs[i].data().archiveId)
        .get();
      archives.push({ ...evt.data(), id: evt.id });
    }

    dispatch({ type: FETCH_ARCHIVES, payload: { archives } });

    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const goingToArchive = archive => async (dispatch, getState) => {
  dispatch(asyncActionStart())
  const firestore = firebase.firestore();
  const user = firebase.auth().currentUser;
  const photoURL = getState().firebase.profile.photoURL;
  const attendee = {
    going: true,
    joinDate: Date.now(),
    photoURL: photoURL || '/assets/user.png',
    displayName: user.displayName,
    host: false
  };
  try {
    let archiveDocRef = firestore.collection('archives').doc(archive.id);
    let archiveAttendeeDocRef = firestore.collection('archive_attendee').doc(`${archive.id}_${user.uid}`);

    await firestore.runTransaction(async (transaction) => {
      await transaction.get(archiveDocRef);
      await transaction.update(archiveDocRef, {
        [`attendees.${user.uid}`]: attendee
      })
      await transaction.set(archiveAttendeeDocRef, {
        archiveId: archive.id,
        userUid: user.uid,
        archiveDate: archive.date,
        host: false
      })
    })
    dispatch(asyncActionFinish())
    toastr.success('Success', 'You have signed up to the archive');
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError())
    toastr.error('Oops', 'Problem signing up to archive');
  }
};

export const cancelGoingToArchive = archive => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  try {
    await firestore.update(`archives/${archive.id}`, {
      [`attendees.${user.uid}`]: firestore.FieldValue.delete()
    });
    await firestore.delete(`archive_attendee/${archive.id}_${user.uid}`);
    toastr.success('Success', 'You have removed yourself from the archive');
  } catch (error) {
    console.log(error);
    toastr.error('Oops', 'something went wrong');
  }
};