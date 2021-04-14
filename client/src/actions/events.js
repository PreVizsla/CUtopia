import { CREATE, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const showEvents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data });
    }   catch (error) {
        console.log(error);
    }
};

export const createEvent = (event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(event);
        dispatch({ type: CREATE, payload: data });
    }   catch (error) {
        console.log(error);
    }
}