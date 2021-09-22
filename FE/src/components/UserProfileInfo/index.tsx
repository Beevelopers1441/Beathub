import React from 'react';
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';

function UserProfileInfo() {
  return (
    <div>
      <ProfileImg></ProfileImg>
      <Nickname></Nickname>
      <Intro></Intro>
    </div>
  )
}

export default UserProfileInfo;