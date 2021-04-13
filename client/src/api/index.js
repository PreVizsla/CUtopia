import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:5000' });

export const signIn = (formData) => API.post('/Signup_signin', formData);
export const signUp = (formData) => API.post('/Signup_signin', formData);
export const signUpDetail = (formData) => API.post('/Signup', formData);