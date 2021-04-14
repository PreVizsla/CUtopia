import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export default (jobs = [], action) => {
  switch (action.type) {
    case CREATE:
        return [...jobs, action.payload];
    case FETCH_ALL:
      return action.payload;
    default:
      return jobs;
  }
};