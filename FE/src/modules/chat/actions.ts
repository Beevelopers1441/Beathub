import { deprecated } from 'typesafe-actions';
import { IBasicUser } from 'types';

const { createStandardAction } = deprecated;

// Action Type 정의
export const OPEN = 'chat/OPEN';
export const FORCEDOPEN = 'chat/FORCEDOPEN';
export const OPENCHATROOM = 'chat/OPENCHATROOM';
export const CLOSECHATROOM = 'chat/CLOSECHATROOM';
export const SETCOUNTPARTUSER = 'chat/SETCOUNTPARTUSER';

// Action 생성 함수 구현
export const openAction = createStandardAction(OPEN)();
export const forcedOpenAction = createStandardAction(FORCEDOPEN)();
export const openChatRoomAction = createStandardAction(OPENCHATROOM)();
export const closeChatRoomAction = createStandardAction(CLOSECHATROOM)();
export const setCountpartUserAction = createStandardAction(SETCOUNTPARTUSER)<{ userInfo: IBasicUser | null }>();