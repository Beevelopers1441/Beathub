import React from 'react';

// component
// import { ProfileImage } from 'components/atoms';

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
      {/* <div>
        <ProfileImage url={"https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"} />
      </div> */}
      <img 
        className="profile-img" 
        src={imageUrl} 
        alt="프로필 이미지"
        onError={(e) => handleImgError(e)}
      />
    </Wrapper>
  )
}

export default ProfileImg;