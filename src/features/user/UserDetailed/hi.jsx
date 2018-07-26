exports.cancelActivity = functions.firestore.document('Archives/{ArchiveId}').onUpdate((archive, context) => {
  let updatedArchive = archive.after.data();
  let previousArchiveData = archive.before.data();
  console.log({ archive });
  console.log({ context });
  console.log({ updatedArchive });ßß
  console.log({ previousArchiveData });

  if (!updatedArchive.cancelled || updatedArchive.cancelled === previousArchiveData.cancelled) {
    return false;
  }

  const activity_arc = newActivity('cancelledArchive', updatedArchive, context.params.archiveId);

  console.log({ activity_arc });

  return admin
    .firestore()
    .collection('activity_arc')
    .add(activity_arc)
    .then(docRef => {
      return console.log('Activity created with id: ', docRef.id);
    })
    .catch(err => {
      return console.log('Error adding activity_arc', err);
    });
});

