import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

// for sign in
export const signIn = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
    } catch (error) {
      console.log(error);
    }
  };
  

// for sign up
export const signUp = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

    } catch (error) {
        console.log(error);
    }
};

// for frther sign up details
export const signUpDetail = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUpDetail(formData);
    
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
};
    
// forgot password
export const forgotPassword = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.forgotPassword(formData);

        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}

// reset password
export const resetPassword = (code, formData, router) => async (dispatch) => {
    try {
        const { data } = await api.resetPassword(formData);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}

// user verification
export const verifyUser = (code, router) => async (dispatch) => {
    try {
        const { data } = await api.verifyUser(code);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}

  
