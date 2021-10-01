import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';

interface IProps {
  imageUrl: string;
}

const ProfileImg: React.FC<IProps> = ({ imageUrl }) => {

  // 기본 프로필 이미지 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultProfileImg;
  }

  return(
    <Wrapper>
      <ProfileImage url={imageUrl} handleImgError={handleImgError} className="user-image"></ProfileImage>
    </Wrapper>
  )
}

export default ProfileImg;