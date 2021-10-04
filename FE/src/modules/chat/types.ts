import { ActionType } from 'typesafe-actions';
import * as actions from './actions'
import { IBasicUser } from 'types';

export type ChatAction = ActionType<typeof actions>

export type Chat = {
  isOpen: boolean;
  isChatRoom: boolean;
  countpartUser: IBasicUser | null;
};