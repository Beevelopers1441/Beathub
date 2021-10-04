import React from 'react';
import ProfileImg from 'components/atoms/ProfileImage';

import Wrapper from './styles';

import { Member } from 'types';

interface Props {
  member: Member;
}

const MemberItem: React.FC<Props> = ({ member }) => {
  return(
    <Wrapper>
      <ProfileImg url={member.imageUrl} className="profile-img"></ProfileImg>
    </Wrapper>
  )
}

export default MemberItem;