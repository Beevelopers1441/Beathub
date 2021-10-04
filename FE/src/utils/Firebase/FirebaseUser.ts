import { IBasicUser } from 'types';

class FirebaseUser {
  id: number;
  imageUrl: string;
  name: string;

  constructor(userInfo: IBasicUser) {
    this.id = userInfo.id;
    this.imageUrl =userInfo.imageUrl;
    this.name = userInfo.name;

  };
};

export { FirebaseUser };