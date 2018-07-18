import { toastr } from "react-redux-toastr";
import { CREATE_ARCHIVE, DELETE_ARCHIVE, UPDATE_ARCHIVE } from './archiveConstants';

export const createArchive = (archive) => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_ARCHIVE,
        payload: {
          archive
        }
      });
      toastr.success('Success!','Archive has been created')
    } catch(error) {
      toastr.error('Oops','Something went wrong')
    }
  };
}

export const updateArchive = (archive) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_ARCHIVE,
        payload: {
          archive
        }
      });
      toastr.success('Success!','Archive has been updated')
    } catch(error) {
      toastr.error('Oops','Something went wrong')
    }
  };
}

export const deleteArchive = (archiveId) => {
 return async dispatch => {
    try {
      dispatch({
        type: DELETE_ARCHIVE,
        payload: {
          archiveId
        }
      });
      toastr.success('Success!','Archive has been deleted')
    } catch(error) {
      toastr.error('Oops','Something went wrong')
    }
  };
}
