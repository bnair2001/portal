import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import archiveReducer from "../../features/archive/ArchiveReducer";
import modalsReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer';
const rootReducer = combineReducers({
  auth:authReducer,
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  archives:archiveReducer,
  modals: modalsReducer
})

export default rootReducer;