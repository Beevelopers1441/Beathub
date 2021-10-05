import React from 'react';
import { Link } from 'react-router-dom';

import { ProfileImage, InstItem } from 'components/atoms';

import Wrapper from './styles';
import { Tooltip } from '@mui/material';
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';


import { BandMember } from 'types';

interface Props {
  member: BandMember;
}

const MemberItem: React.FC<Props> = ({ member }) => {

  // 기본 프로필 이미지 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultProfileImg;
  }
  
  return(
    <Wrapper>
      <Tooltip title={member.member.name} placement="bottom">
        <div className="item-wrapper">
          <Link to={`/profile/${member.member.id}`}>
            <ProfileImage url={member.member.imageUrl} className="item-img" handleImgError={handleImgError}></ProfileImage>
            <InstItem inst={member.type.type}></InstItem>
          </Link>
        </div> 
      </Tooltip>
    </Wrapper>
  )
}

export default MemberItem;