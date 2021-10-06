import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';
import { Tooltip } from '@mui/material';
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';

//types
import { Band } from 'types';

interface Props {
  band: Band
}

const BandsItem: React.FC<Props> = ({ band }) => {

  // 기본 프로필 이미지 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultProfileImg;
  }

  return(
    <Wrapper>
      <Tooltip title={band.name} placement="bottom">
        <div className="item-wrapper">
          <Link to={`/group-profile/${band.id}`}>
            <ProfileImage url={band.imageUrl} className="item-img" handleImgError={handleImgError}></ProfileImage>
          </Link>
        </div> 
      </Tooltip>
    </Wrapper>
  )
}

export default BandsItem;