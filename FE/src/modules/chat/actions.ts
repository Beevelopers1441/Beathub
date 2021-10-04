import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// Action Type 정의
export const OPEN = 'chat/OPEN';

// Action 생성 함수 구현
export const openAction = createStandardAction(OPEN)();