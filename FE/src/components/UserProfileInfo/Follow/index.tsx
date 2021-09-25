import React from 'react';
import Followers from './Followers';
import Followings from './Followings';
import Wrapper from './styles';

function Follow() {
  return(
    <Wrapper>
      <Followers></Followers>
      <Followings></Followings>
    </Wrapper>
  )
}

export default Follow;