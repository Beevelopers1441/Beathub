import React from 'react';
import Wrapper from './styles';
import { Member } from 'types';

interface Props {
  member: Member
}

const MembersItem: React.FC<Props> = ({ member }) => {
  return(
    <Wrapper>
      <div className="item-wrapper">
        <img className="item-img" src={member.imgUrl} alt="member_image"/>
      </div> 
    </Wrapper>
  )
}

export default MembersItem;