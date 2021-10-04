import { Chat, ChatAction } from './types';
import { createReducer } from 'typesafe-actions';
import { OPEN, FORCEDOPEN, OPENCHATROOM, CLOSECHATROOM, SETCOUNTPARTUSER } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState = {
  isOpen: false,
  isChatRoom: false,
  countpartUser: null,
}

// 리듀서 선언
// draft: 기존의 state
const auth = createReducer<Chat, ChatAction>(initialState, {
  [OPEN] : (state) => 
  produce(state, draft => {
    draft.isOpen = !state.isOpen;
  }),
  [FORCEDOPEN] : (state) => 
  produce(state, draft => {
    draft.isOpen = true;
  }),
  [OPENCHATROOM] : (state) => 
  produce(state, draft => {
    draft.isChatRoom = true;
  }),
  [CLOSECHATROOM] : (state) => 
  produce(state, draft => {
    draft.isChatRoom = false;
  }),
  [SETCOUNTPARTUSER] : (state, action) => 
  produce(state, draft => {
    if (action.payload.userInfo !== null) {
      if (draft.countpartUser) {
        draft.countpartUser.id = action.payload.userInfo.id;
        draft.countpartUser.imageUrl = action.payload.userInfo.imageUrl;
        draft.countpartUser.name = action.payload.userInfo.name;
      } else {
        const newCountpartUser = {
          id: action.payload.userInfo.id,
          imageUrl: action.payload.userInfo.imageUrl,
          name: action.payload.userInfo.name,
        };
        draft.countpartUser = newCountpartUser;
      };
    };
  }),
})

export default auth;