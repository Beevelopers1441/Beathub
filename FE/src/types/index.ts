export interface Itmp {
  id: any;
}

export interface IPost {
  id: number,
  title: string,
  content: string,
  tags: string[],
  status: string,
  recruitStatus: string;
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
  profileObj: ProfileObj;
}