import { deprecated } from 'typesafe-actions';
import { AudioInfo } from './types';

const { createStandardAction } = deprecated;

// Action Type 정의
export const ADD = 'beathub/ADD';
export const REMOVE = 'beathub/REMOVE';



// Action 생성 함수 구현
export const addAction = createStandardAction(ADD)<{audio: AudioInfo}>();
export const removeAction = createStandardAction(REMOVE)<{audioIdx: number}>();