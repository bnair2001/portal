import { combineReducers } from 'redux';
import { reducer as FormReducer } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-form';
import {reducer as toastrReducer} from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux-toastr';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import modalsReducer from "../../features/modals/modalReducer"
import authReducer from "../../features/auth/authReducer";
import archiveReducer from "../../features/archive/ArchiveReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import asyncReducer from "../../features/async/asyncReducer"

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  archives: archiveReducer,
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer,
  toastr:toastrReducer,
  async:asyncReducer
})

export default rootReducer;