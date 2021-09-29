import React from 'react';
import Wrapper from './styles';

import { FollowPerson } from 'types';

interface Props {
  followers: FollowPerson[]
}

const Followers: React.FC<Props> = ({ followers }) => {

  var followersLength = 0

  if ( followers === null) {
    followersLength = 0
  } else {
    followersLength = followers.length
  }


  return(
    <Wrapper>
      <div className="followers-letter">팔로워 {followersLength}</div>
    </Wrapper>
  )
}

export default Followers;