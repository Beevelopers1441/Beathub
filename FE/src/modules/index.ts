import { combineReducers } from 'redux';
import auth from './auth';

export type RootState = {

};

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;