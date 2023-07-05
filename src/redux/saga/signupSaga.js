
import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { SIGNUP_SUCCESS } from '../types';
export function* signupMainSaga() {
  yield takeLatest('SIGNUP', signupSaga);
}

function* clearStorage() {
    try {
        AsyncStorage.clear();  
        } 
    catch(e) {
        console.log('error save to Storage');
    }
  };

function* signupSaga(action) {
    axios.post('https://62d8ce909088313935951ab9.mockapi.io/api/test/blogs',
      {
        username: action.data.username,
        password: action.data.password
      })
    clearStorage();
    yield put({type: SIGNUP_SUCCESS});
}
