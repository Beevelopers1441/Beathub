import { StringDecoder } from "string_decoder";

export interface IBasicUser {
  id: number;
  imageUrl: string;
  name: string;
}
export interface IComment {
  id: number;
  content: string;
  createTime: string;
  author: IBasicUser;
}

export interface ITag {
  id: number;
  type: string;
}
export interface IPost {
  id: number,
  title: string,
  content: string,
  tag: ITag,
  recruiting: boolean,
  createTime: string;
  author: IBasicUser;
  likeUsers: IBasicUser[];
  comments: IComment[];
}

export interface ProfileObj {
  email: string,
  name: string,
  googleId: string,
  imageUrl: string;
}

export interface UserInfo {
  email: string,
  profileImageUrl: string,
  userId: string,
  userName: string;
  profileObj?: ProfileObj;
}


// 유저 프로필
export interface ProfileInfo {
  imageUrl: string,
  nickname: string,
  introduction?: string,
  instruments: Instrument[],
  followers: FollowPerson[],
  followings: FollowPerson[],
  participatingBands:Band[]
}

export interface Instrument {
  id: number,
  model: string,
  ability: string,
  player: {
    id: number,
    name: string,
    imageUrl: string
  },
  instrument: {
    id: number,
    type: string
  }
}

export interface FollowPerson {
  id: number,
  imageUrl: string,
  name: string
}


// 밴드 프로필
export interface BandProfileInfo {
  band: Band,
  leader: Leader,
  members: Member[],
  followers: {}[],
  buckets: {}[],
  posts: {}[],
}

export interface Band {
  id: number,
  name: string,
  imageUrl: string,
  introduction: string
}

export interface Leader {
  id: number,
  name: string,
  imageUrl: string
}

export interface Member {
  id: number,
  name: string,
  imageUrl: string
}