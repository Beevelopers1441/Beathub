import React, { useState } from 'react';
import Content from './Content';
import BandMaster from './BandMaster';
import MemberList from './MemberList';

import Wrapper from './styles';

// types
import { BandProfileInfo } from 'types';

interface Props {
  bandInfo: BandProfileInfo;
}

const Intro: React.FC<Props> = ({ bandInfo }) => {

  return(
    <Wrapper>
      <Content band={bandInfo.band} masterId={bandInfo.leader.id}></Content>
      <BandMaster master={bandInfo.leader}></BandMaster>
      <MemberList members={bandInfo.members}></MemberList>
    </Wrapper>
  )
}

export default Intro;