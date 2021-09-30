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
  followers: {}[],
  followings: {}[],
  leadingBands: {}[],
  participatingBands:{}[]
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

export interface Band {
  id: number,
  name: string,
  imgUrl: string
}

export interface Bands {
  bands: Band[]
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
  imgUrl: string
}

export interface Members {
  members: Band[]
}