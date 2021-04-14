import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
export const signUpDetail = (formData) => API.post('/auth/details', formData);
export const forgotPassword = (formData) => API.post('/auth/forgetpassword', formData);
export const verifyUser = (formData) => API.get('/auth/confirm/:confirmationCode', formData);
export const resetPassword = (formData) => API.put('/auth/passwordreset/:resetToken', formData);