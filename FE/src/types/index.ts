export interface Itmp {
  id: any;
}

export interface IUser {
  name: string;
  imageUrl: string;
}

export interface IComment {
  content: string;
  created_at: string;
  userInfo: IUser;
}

export interface IPost {
  id: number,
  title: string,
  content: string,
  tags: string[],
  status: string,
  recruitStatus: string;
  created_at: string;
  likes: number;
  comments: IComment[];
  userInfo: IUser;
}

export interface ProfileObj {
  email: string,
  name: string,
  googleId: string,
  imageUrl: string;
}

export interface UserInfo {
  email: string,
  nickname: string,
  id: string,
  imageUrl: string;
  profileObj?: ProfileObj;
}

export interface Instrument {
  name: string,
  skill: string
}

export interface Instruments {
  instruments: Instrument[]
}