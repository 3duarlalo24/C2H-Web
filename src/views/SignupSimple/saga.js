import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';
import {
  requestingApi,
  responseSuccess,
  responseFailed,
  setUserToken,
} from 'containers/App/actions';
import { SEND_LOGIN_DATA } from './constants';
import { resetData } from './actions';

export function* loginUser({ credentials }) {
  const { email, password } = credentials;
  const requestURL = 'login/paciente';
  const headers = {
    method: 'POST',
    body: {
      email,
      password,
    },
  };
  try {
    yield put(requestingApi());
    const responseLogin = yield call(request, requestURL, headers);
    const loginOutput = responseLogin.output;
    if (loginOutput) {
      const { payload: { message } } = loginOutput;
      yield put(responseFailed(message));
      return;
    }

    const { jwt } = responseLogin;
    const requestProfileURL = 'perfil';
    const headersProfile = {
      method: 'POST',
      token: jwt,
    };
    const responseProfile = yield call(request, requestProfileURL, headersProfile);
    const profileOutput = responseProfile.output;
    if (profileOutput) {
      const { payload: { message } } = profileOutput;
      yield put(responseFailed(message));
      return;
    }

    FS.identify(responseProfile.id, { // eslint-disable-line
      displayName: responseProfile.fullName,
      email: responseProfile.contactData.email,
      userStatus: responseProfile.userStatus,
      reviewsWritten_int: 14,
    });
    yield put(setUserToken(jwt, responseProfile));
    yield put(resetData());
    yield put(responseSuccess());
    yield put(push('/home'));
  } catch (err) {
    yield put(responseFailed(err));
  }
}

export default function* rootSagaLogin() {
  yield takeLatest(SEND_LOGIN_DATA, loginUser);
}
