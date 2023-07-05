import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchLoginData } from '../../FakeApi/API';
import {LOGIN_FAILED,LOGIN_SUCCESS} from '../types'

export function* loginMainSaga() {
  yield takeLatest('LOGIN', loginSaga);
}

function* saveDataToStorage(data) {
  try {
      AsyncStorage.setItem('data',
      JSON.stringify({
        username: data.username,
        password: data.password
      }))  
      } 
  catch(e) {
      console.log('error save to Storage');
  }
};

function* loginSaga(action) {
    let token = null;
    const username= action.data.username;
    const password= action.data.password;
    const response = yield call(fetchLoginData);
    const resData = JSON.parse(JSON.stringify(response));
    const resDataArray = resData.data;
    for ( var i = 0 ; i< resDataArray.length; i++){
        if ((username == resDataArray[i].username)
        &&
        (password == resDataArray[i].password))
        {
            token = resDataArray[i].username + resDataArray[i].password;
            saveDataToStorage(token);
            break;
        }
    }
    if(token == null) {
      yield put({type: LOGIN_FAILED});
    }
    else {
      yield put({type: LOGIN_SUCCESS});
    }

}
