import React, { useState } from 'react';

// components
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import Instruments from './Instruments';
import EditForm from './EditForm';
import EditBtn from './EditBtn';
import Follow from './Follow'
import Bands from './Bands'

// types
import { ProfileInfo } from 'types'

interface Props {
  profileInfo: ProfileInfo;
}

const UserProfileInfo: React.FC<Props> = ({ profileInfo }) => {

  const [ onEdit, setOnEdit ] = useState<boolean>(false)

  const onToggleEdit = () => {
    setOnEdit(!onEdit)
  }

  return (
    <div>
      <ProfileImg></ProfileImg>
      {onEdit ?
        <div>
          <EditForm onToggleEdit={onToggleEdit}></EditForm>
        </div>
        :
        <div>
          <Nickname></Nickname>
          <Intro></Intro>
          <Instruments></Instruments>
          <EditBtn onToggleEdit={onToggleEdit}></EditBtn>
        </div>
      }
      <Follow></Follow>
      <Bands></Bands>
    </div>
  )
}

export default UserProfileInfo;