import { UserAction, User } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT, GET_TOKEN, GET_USER_INFO } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState : User = {
  isLoggedIn: false,
  // token: '',
  token: '',
  userInfo: {
    id: 0,
    name: "",
    imageUrl: ""
  }
}

// 리듀서 선언
// draft: 기존의 state
const auth = createReducer<User, UserAction>(initialState, {
  [LOGIN] : (state) => 
  produce(state, draft => {
    draft.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
  }),
  [LOGOUT] : (state) => 
  produce(state, draft => {
    draft.isLoggedIn = false;
    draft.token = ""
    draft.userInfo = {
      id: 0,
      name: "",
      imageUrl: ""
    };
    localStorage.clear();
  }),
  // [GET_TOKEN]: (state, action) => ({ count: state.token + action.payload })
  [GET_TOKEN] : (state, action) =>
  produce(state, draft => {
    draft.token = action.payload.token;
    localStorage.setItem("userToken", action.payload.token);
  }),
  [GET_USER_INFO] : (state, action) =>
  produce(state, draft => {
    draft.userInfo.id = action.payload.userinfo.id;
    draft.userInfo.name = action.payload.userinfo.name;
    draft.userInfo.imageUrl = action.payload.userinfo.imageUrl;
    localStorage.setItem("userInfo", JSON.stringify(action.payload.userinfo));
  }),
})

export default auth;