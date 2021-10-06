import { combineReducers } from 'redux';
import user from './user/reducer';
import chat from './chat/reducer';
import beathub from './beathub/reducer';
import { User } from './user/types';
import { Chat } from './chat/types';
import { Beathub } from './beathub/types';

// RootState 정의
export type RootState = {
  beathub: Beathub;
  user: User;
  chat: Chat;
};

// 구현한 reducer를 합쳐줌
const rootReducer = combineReducers({
  beathub,
  user,
  chat,
});

export default rootReducer;