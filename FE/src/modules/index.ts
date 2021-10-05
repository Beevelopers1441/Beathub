import { combineReducers } from 'redux';
import user from './user/reducer';
import chat from './chat/reducer';
import { User } from './user/types';
import { Chat } from './chat/types';

// RootState 정의
export type RootState = {
  user: User;
  chat: Chat;
};

// 구현한 reducer를 합쳐줌
const rootReducer = combineReducers({
  user,
  chat,
});

export default rootReducer;