import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;


// Action Type 정의
export const LOGIN = 'user/LOGIN';
export const GET_TOKEN = 'user/GET_TOKEN';
export const GET_USER_INFO = 'user/GET_USER_INFO';


// Action 생성 함수 구현
export const loginAction = createStandardAction(LOGIN)();
export const getTokenAction = createStandardAction(GET_TOKEN)<{ token:string }>();
export const getUserInfoAction = createStandardAction(GET_USER_INFO)();