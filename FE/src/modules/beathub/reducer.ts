import { BeathubAction, Beathub } from './types';
import { createReducer } from 'typesafe-actions';
import { ADD, REMOVE, SET_BUCKET_AUDIOS } from './actions';
import produce from 'immer'; // ...문법 대신 사용, 2개의 인자만 설정하면 객체의 불변성을 관리해줌


// 초기 상태 선언
const initialState : Beathub = {
  commitList: [],
  bucketList: [],
  updated: false,
}

// 리듀서 선언
// draft: 기존의 state
const beathub = createReducer<Beathub, BeathubAction>(initialState, {
  [ADD] : (state, action) => 
  produce(state, draft => {
    draft.commitList.push(action.payload.audio)
  }),
  [REMOVE] : (state, action) => 
  produce(state, draft => {
    draft.commitList.splice(action.payload.audioIdx, 1)
  }),
  [SET_BUCKET_AUDIOS] : (state, action) => 
  produce(state, draft => {
    draft.bucketList = action.payload.audioList
  }),
})

export default beathub;