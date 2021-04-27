import { CREATE, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

// for fetching jobs
export const showJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobs();
        dispatch({ type: FETCH_ALL, payload: data });
    }   catch (error) {
        console.log(error);
    }
};

// for creating a job
export const createJob = (job) => async (dispatch) => {
    try {
        const { data } = await api.createJob(job);
        dispatch({ type: CREATE, payload: data });
    }   catch (error) {
        console.log(error);
    }
}