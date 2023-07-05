import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { LOGOUT, SIGNUP } from "../types";

export const logout = () => {
  return (dispatch) => {
    AsyncStorage.clear();
    dispatch({ type: LOGOUT });
  };
};

export const signup = (username, password) => {
  return async (dispatch) => {
    await axios.post(
      "https://62d8ce909088313935951ab9.mockapi.io/api/test/blogs",
      {
        username: username,
        password: password,
      }
    );
    await AsyncStorage.clear();
    dispatch({
      type: SIGNUP,
    });
  };
};

