import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

//i think u want to do this
// yes thank you

// what we also need to do is to get that the user is authorized 
// from the middleware of authenticationl 
// i see 
// axios.interceptors.request.use(
//   request => {
//       if(request.url.includes('logout') || request.url.includes('forgotPassword')) {
//         request.headers['user'] = store.getState().persistedUserReducer.userInfo.username;
//       }
//     return request;
//   }, 
//   error => {
//     return Promise.reject(error);
//   }
// );

export const signIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
export const signUpDetail = (formData) => API.post('/auth/details', formData);
export const forgotPassword = (formData) => API.post('/auth/forgetpassword', formData);
export const resetPassword = (code, formData) => API.put('/auth/passwordreset/', { params: {
    resetPasswordToken: this.props.match.params.resetToken
} }, formData);

var paramsString = "confirmationCode"
const searchParams = new URLSearchParams()

export const verifyUser = (code) => API.get("/auth/confirm/"+code).then((response) => {
    return response.data;
  });
  //tbh idk why this is still error lol 
//me rea scrip
export const fetchJobs = () => API.get('/jobs');
export const createJob = (newJob) => API.post('/jobs', newJob);

export const fetchEvents = () => API.get('/events');
export const createEvent = (newEvent) => API.post('/events', newEvent);