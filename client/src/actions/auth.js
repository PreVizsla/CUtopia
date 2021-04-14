import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

export const signIn = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
    } catch (error) {
      console.log(error);
    }
  };
  
export const signUp = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

    } catch (error) {
        console.log(error);
    }
};

export const signUpDetail = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUpDetail(formData);
    
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
};
    

export const forgotPassword = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.forgotPassword(formData);

        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = (code, formData, router) => async (dispatch) => {
    try {
        const { data } = await api.resetPassword(formData);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}

export const verifyUser = (code, router) => async (dispatch) => {
    try {
        const { data } = await api.verifyUser(code);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}
