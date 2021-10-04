import { Chat, ChatAction } from './types';
import { createReducer } from 'typesafe-actions';
import { OPEN } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState = {
  isOpen: false,
}

// 리듀서 선언
// draft: 기존의 state
const auth = createReducer<Chat, ChatAction>(initialState, {
  [OPEN] : (state) => 
  produce(state, draft => {
    draft.isOpen = !state.isOpen;
  }),
})

export default auth;