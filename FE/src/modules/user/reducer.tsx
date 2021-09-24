import { UserAction, User } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, GET_USER_INFO } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState : User = {
  isLoggedIn: false,
  userInfo: {}
}

// 리듀서 선언
// draft: 기존의 state
const auth = createReducer<User, UserAction>(initialState, {
  [LOGIN] : (state) => 
  produce(state, draft => {
    draft.isLoggedIn = true
  }),
  [GET_USER_INFO] : (state, action) =>
  produce(state, draft => {
    draft.userInfo = action
  })
})

export default auth;