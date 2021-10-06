import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type BeathubAction = ActionType<typeof actions>

export interface AudioInfo {
  userInfo: {
    imageUrl: string;
    name: string,
  }
  title: string;
  instrument: string;
  fileUrl: string;
}

export interface Beathub {
  commitList : AudioInfo[],
  bucketList: AudioInfo[],
  updated: boolean,
}