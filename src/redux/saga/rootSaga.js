import {all} from 'redux-saga/effects';
import { loginMainSaga } from './loginSaga';
import { logoutMainSaga } from './logoutSaga';
import {signupMainSaga} from './signupSaga'
const rootSaga = function*() {
  yield all([loginMainSaga()]);
  yield all([logoutMainSaga()]);
  yield all([signupMainSaga()]);

};

export default rootSaga;