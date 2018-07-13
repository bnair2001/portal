import { CREATE_ARCHIVE, DELETE_ARCHIVE, UPDATE_ARCHIVE } from './archiveConstants';

export const createArchive = (archive) => {
  return {
    type: CREATE_ARCHIVE,
    payload: {
      archive
    }
  }
}

export const updateArchive = (archive) => {
  return {
    type: UPDATE_ARCHIVE,
    payload: {
      archive
    }
  }
}

export const deleteArchive = (archiveId) => {
  return {
    type: DELETE_ARCHIVE,
    payload: {
      archiveId
    }
  }
}