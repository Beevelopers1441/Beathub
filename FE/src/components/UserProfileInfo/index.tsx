import React from 'react';
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import Instruments from './Instruments';
import EditBtn from './EditBtn';

function UserProfileInfo() {
  return (
    <div>
      <ProfileImg></ProfileImg>
      <Nickname></Nickname>
      <Intro></Intro>
      <Instruments></Instruments>
      <EditBtn></EditBtn>
    </div>
  )
}

export default UserProfileInfo;