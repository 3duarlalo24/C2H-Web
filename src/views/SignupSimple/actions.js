import {
    DEFAULT_ACTION,
    SET_DATA,
    SEND_LOGIN_DATA,
    RESET_DATA,
  } from './constants';
  
  export function defaultAction() {
    return {
      type: DEFAULT_ACTION,
    };
  }
  
  export function setData(data) {
    return {
      type: SET_DATA,
      data,
    };
  }
  
  export function sendLoginData(credentials) {
    return {
      type: SEND_LOGIN_DATA,
      credentials,
    };
  }
  
  export function resetData() {
    return {
      type: RESET_DATA,
    };
  }
  