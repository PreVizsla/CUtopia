import { combineReducers } from 'redux';

import auth from './auth';
import jobs from './jobs'

export const reducers = combineReducers({ jobs, auth });