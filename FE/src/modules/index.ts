import { combineReducers } from 'redux';
import auth from './user/reducer';
import { User } from './user/types';

// RootState 정의
export type RootState = {
  user: User;
};

// 구현한 reducer를 합쳐줌
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;