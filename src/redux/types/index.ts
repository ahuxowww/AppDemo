
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const GET_TODO = 'GET_TODO'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';



export type todoItem = {
    id: string;
    title: string | undefined;
    description: string | undefined;
    isChecked: boolean | false;
  };

export type CartItem = {
  id: string;
  quantity: number;
  title: string;
  image: string;
  price: number;
  ischeck: boolean;
};