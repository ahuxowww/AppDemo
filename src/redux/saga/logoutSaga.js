import { put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LOGOUT,LOGOUT_REQUEST} from '../types'
export function* logoutMainSaga() {
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
}

function* logoutSaga() {
    AsyncStorage.clear();
    yield put({type: LOGOUT});
}
