import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type UserAction = ActionType<typeof actions>

export type User = {
  isLoggedIn: boolean,
  token: string,
  userInfo: UserInitialInfo,
  refreshPage: boolean,
};

export type UserInitialInfo = {
  id: number,
  name: string,
  imageUrl: string
}