import { combineReducers } from 'redux';
import auth from './auth/reducer';
import { Auth } from './auth/types';

// RootState 정의
export type RootState = {
  auth: Auth;
};

// 구현한 reducer를 합쳐줌
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;