import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './archiveConstants';

export const createArchive = (archive) => {
  return {
    type: CREATE_EVENT,
    payload: {
      archive
    }
  }
}

export const updateArchive = (archive) => {
  return {
    type: UPDATE_EVENT,
    payload: {
      archive
    }
  }
}

export const deleteArchive = (archiveId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      archiveId
    }
  }
}