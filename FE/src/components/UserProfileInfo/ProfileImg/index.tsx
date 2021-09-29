import React from 'react';

// component
// import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

interface IProps {
  imageUrl: string;
}

const ProfileImg: React.FC<IProps> = ({ imageUrl }) => {

  return(
    <Wrapper>
      <img className="profile-img" src={imageUrl} alt="프로필 이미지" />
    </Wrapper>
  )
}

export default ProfileImg;