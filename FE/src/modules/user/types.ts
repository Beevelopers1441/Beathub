import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type UserAction = ActionType<typeof actions>

export type User = {
  isLoggedIn: boolean,
  token: string,
  userInfo: UserInitialInfo
};

export type UserInitialInfo = {
  id: number,
  name: string,
  imageUrl: string
}