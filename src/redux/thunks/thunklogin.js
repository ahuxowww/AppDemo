import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LOGIN, LOGIN_SUCCESS } from "../types";
import { loginFailedAC } from "../actions/action";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    let userauth = [];
    let errorText = "";
    try {
      res = await axios.get("https://62d8ce909088313935951ab9.mockapi.io/api/test/blogs")  
      userauth = res.data;
      let token = null;
      for (var i = 0; i < userauth.length; i++) {
        if (
          userauth[i].username == username &&
          userauth[i].password == password
        ) {
          token = username + password;
          await AsyncStorage.setItem("token", token);
          break;
        }
      }
      if (token == null) {
        errorText = "Kiểm tra lại";
        dispatch(loginFailedAC(errorText));
        return;
      } else {
        dispatch({ type: LOGIN_SUCCESS });
      }
    } catch (error) {
      errorText = error.toJSON().message;
      dispatch(loginFailedAC(errorText));
      return;
    }
  };
};
