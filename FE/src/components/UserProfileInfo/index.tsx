import React from 'react';
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import Instruments from './Instruments';
import EditBtn from './EditBtn';
import Follow from './Follow'
import Bands from './Bands'

function UserProfileInfo() {
  return (
    <div>
      <ProfileImg></ProfileImg>
      <Nickname></Nickname>
      <Intro></Intro>
      <Instruments></Instruments>
      <EditBtn></EditBtn>
      <Follow></Follow>
      <Bands></Bands>
    </div>
  )
}

export default UserProfileInfo;