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

export interface Instrument {
  name: string,
  skill: string
}

export interface Instruments {
  instruments: Instrument[]
}

export interface Band {
  id: number,
  name: string,
  imgUrl: string
}

export interface Bands {
  bands: Band[]
}

export interface Member {
  id: number,
  name: string,
  imgUrl: string
}

export interface Members {
  members: Band[]
}