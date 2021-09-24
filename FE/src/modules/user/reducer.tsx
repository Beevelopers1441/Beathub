import { UserAction, User } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, GET_TOKEN, GET_USER_INFO } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState : User = {
  isLoggedIn: false,
  // token: '',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6IkpJWVVOIEtJTSIsInByb2ZpbGVJbWFnZVVybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnlYelhDek42dUx4N3gwZzhrS2NnNDdOWV84VlhVakw0YVpQU0tSPXM5Ni1jIiwiZW1haWwiOiJqeWsu',
  userInfo: {}
}

// 리듀서 선언
// draft: 기존의 state
const auth = createReducer<User, UserAction>(initialState, {
  [LOGIN] : (state) => 
  produce(state, draft => {
    draft.isLoggedIn = true
  }),
  [GET_TOKEN] : (state, action) =>
  produce(state, draft => {
    draft.userInfo = action.payload
  }),
  [GET_USER_INFO] : (state, action) =>
  produce(state, draft => {
    draft.userInfo = action
  })
})

export default auth;