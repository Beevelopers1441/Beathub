import React from 'react';
import IntroContent from './IntroContent';
import IntroMember from './IntroMember';

import Wrapper from './styles';

function Intro() {
  return(
    <Wrapper>
      <IntroContent></IntroContent>
      <IntroMember></IntroMember>
    </Wrapper>
  )
}

export default Intro;