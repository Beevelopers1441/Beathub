import React from 'react';
import Content from './Content';
import BandMaster from './BandMaster';
import MemberList from './MemberList';

import Wrapper from './styles';

function Intro() {
  return(
    <Wrapper>
      <Content></Content>
      <BandMaster></BandMaster>
      <MemberList></MemberList>
    </Wrapper>
  )
}

export default Intro;