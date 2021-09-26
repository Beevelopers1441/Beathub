import React, { useState } from 'react';
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import Instruments from './Instruments';
import EditForm from './EditForm';
import EditBtn from './EditBtn';
import Follow from './Follow'
import Bands from './Bands'

function UserProfileInfo() {

  const [ onEdit, setOnEdit ] = useState<boolean>(false)

  const onEditProfile = () => {
    setOnEdit(!onEdit)
  }

  return (
    <div>
      <ProfileImg></ProfileImg>
      {onEdit ?
        <div>
          <EditForm></EditForm>
        </div>
        :
        <div>
          <Nickname></Nickname>
          <Intro></Intro>
          <Instruments></Instruments>
        </div>
      }
      <EditBtn onEditProfile={onEditProfile}></EditBtn>
      <Follow></Follow>
      <Bands></Bands>
    </div>
  )
}

export default UserProfileInfo;