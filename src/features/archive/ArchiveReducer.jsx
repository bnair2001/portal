import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_ARCHIVE, DELETE_ARCHIVE, UPDATE_ARCHIVE, FETCH_ARCHIVES } from './archiveConstants';

 const initialState = [];

export const createArchive = (state, payload) => {
  return [...state, Object.assign({}, payload.archive)]
}

export const updateArchive = (state, payload) => {
  return [
    ...state.filter(archive => archive.id !== payload.archive.id),
    Object.assign({}, payload.archive)
  ]
}

export const deleteArchive = (state, payload) => {
  return [
    ...state.filter(archive => archive.id !== payload.archiveId)
  ]
}

export const fetchArchives = (state, payload) => {
  return payload.archives
}

export default createReducer(initialState, {
  [CREATE_ARCHIVE]: createArchive,
  [UPDATE_ARCHIVE]: updateArchive,
  [DELETE_ARCHIVE]: deleteArchive,
  [FETCH_ARCHIVES]: fetchArchives
})