import React from 'react';
import Wrapper from './styles';

import { FollowPerson } from 'types';

interface Props {
  followers: FollowPerson[]
}

const Followers: React.FC<Props> = ({ followers }) => {

  var followersLength = 0

  if ( followers === null || followers === undefined) {
    followersLength = 0
  } else {
    followersLength = followers.length
  }


  return(
    <Wrapper>
      <div className="followers-letter">{followersLength}명이 팔로우하고 있습니다.</div>
    </Wrapper>
  )
}

export default Followers;