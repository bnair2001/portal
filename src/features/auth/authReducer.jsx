import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
  currentUser: {},
  authenticated: false
}

export const login = (state=initialState, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email 
  }
}

export const logout = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  }
}

export default createReducer(initialState, {
  [LOGIN_USER]: login,
  [SIGN_OUT_USER]: logout
})