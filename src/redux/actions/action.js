import {LOGIN,LOGOUT,SIGNUP,LOGIN_FAILED,LOGIN_SUCCESS,SIGNUP_SUCCESS,CHANGE_LANGUAGE} from '../types'




export const loginSuccessedAC = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

export const loginFailedAC = (text) => {
  return {
    type: LOGIN_FAILED,
    errorText: text,
  };
};



export const logoutAC = () => {
  return {
    type: LOGOUT,
  };
};


export const signupSuccessedAC = () => {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
};



export const loginRequestedAC = (username,password) => {
  return {
    type: LOGIN,
    data: {
      username,
      password,
    },
  };
};


export const signupRequestedAC = (username,password) => {
  return {
    type: SIGNUP,
    data: {
      username,
      password,
    },
  };
};

export const changeLanguage = (language) => {
  return {
      type: CHANGE_LANGUAGE,
      language
  }
}