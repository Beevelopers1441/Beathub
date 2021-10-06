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

// 채팅
export interface IMessage {
  userInfo: IBasicUser;
  text: string;
  createdAt: string;
}
export interface IChatItem {
  userInfo: IBasicUser;
  lastMessage: string;
  lastCreateTime: string;
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
  id: number,
  imageUrl: string,
  email: string,
  nickname: string,
  introduction: string,
  instruments: Instrument[],
  participatingBands:Band[],
  followBands: Band[],
}

export interface Instrument {
  instrument: string,
  ability: string
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
  members: BandMember[],
  followers: {}[],
  buckets: {}[],
  posts: {}[],
}

export interface Band {
  id: number,
  name: string,
  imageUrl: string,
  introduction: string,
  createTime: Date,
}

export interface Leader {
  id: number,
  name: string,
  imageUrl: string
}

export interface AudioInfo {
  userInfo: {
    imageUrl: string;
    name: string,
  }
  title: string;
  instrument: string;
  fileUrl: string;
}

export interface Member {
  id: number,
  name: string,
  imageUrl: string
}

export interface BandMember {
  member: {
    id: number,
    name: string,
    imageUrl: string
  },
  type: {
    id: number,
    type: string
  }
}

export interface UpdateBand {
  bandProfileImage: string,
  introduction: string,
  name: string,
}

export interface UpdateUser {
  imageUrl: string,
  introduction: string,
  name: string,
}