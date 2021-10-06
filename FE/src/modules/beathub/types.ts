import { ActionType } from 'typesafe-actions';
import { AudioInfo } from 'types';
import * as actions from './actions'

export type BeathubAction = ActionType<typeof actions>

export interface Beathub {
  commitList : AudioInfo[],
  bucketList: AudioInfo[],
  updated: boolean,
}