import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
} from "../types";

const initialState = {
  auth: false,
  errorText: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        auth: false,
        errorText: "",
      };
    }

    case LOGIN_SUCCESS: {
      return {
        auth: true,
        errorText: "",
      };
    }

    case LOGIN_FAILED: {
      return {
        auth: false,
        errorText: action.errorText,
      };
    }

    case LOGOUT: {
      return initialState;
    }

    case SIGNUP: {
      return {
        auth: false,
        ...state,
      };
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
