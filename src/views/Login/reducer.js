import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_DATA,
  SEND_LOGIN_DATA,
  RESET_DATA,
} from './constants';

const initialState = fromJS({
  loginData: {
    email: '',
    password: '',
  },
  showPassword: false,
  displayError: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
    case SEND_LOGIN_DATA:
      return state;
    case SET_DATA:
      return state
        .merge(action.data);
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;
