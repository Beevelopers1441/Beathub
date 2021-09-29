import React from 'react';
import Wrapper from './styles';

import { FollowPerson } from 'types';


interface Props {
  followings: FollowPerson[]
}

const Followings: React.FC<Props> = ({ followings }) => {

  var followingsLength = 0

  if ( followings === null || followings === undefined) {
    followingsLength = 0
  } else {
    followingsLength = followings.length
  }

  return(
    <Wrapper>
      <div className="followings-letter">팔로잉 {followingsLength}</div>
    </Wrapper>
  )
}

export default Followings;