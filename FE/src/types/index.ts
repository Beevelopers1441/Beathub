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
  profileImageUrl: string,
  userId: string,
  userName: string;
  profileObj?: ProfileObj;
}


// 유저 프로필
export interface IProfileInfo {
  profileInfo: {
    imageUrl: string,
    nickname: string,
    instruments?: {
      ability: string,
      id: number,
      instrument: {},
      model?: string
    }[],
    followers: {
      id: number,
      imageUrl?: string,
      name: string
    }[],
    followings: {
      id: number,
      imageUrl?: string,
      name: string
    }[],
    leadingBands?: {
      id: number,
      name: string,
      imageUrl?: string,
    }[],
    participatingBands? :{

    }[]
  }
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