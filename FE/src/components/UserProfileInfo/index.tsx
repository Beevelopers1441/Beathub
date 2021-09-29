import React, { useState } from 'react';

// components
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import InstrumentsList from './InstrumentsList';
import EditForm from './EditForm';
import EditBtn from './EditBtn';
import Follow from './Follow';
import Bands from './Bands';

// types
import { ProfileInfo } from 'types';

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
      <ProfileImg imageUrl={profileInfo.imageUrl}></ProfileImg>
      {onEdit ?
        <div>
          <EditForm onToggleEdit={onToggleEdit}></EditForm>
        </div>
        :
        <div>
          <Nickname nickname={profileInfo.nickname}></Nickname>
          <Intro intro={profileInfo.introduction}></Intro>
          <InstrumentsList instruments={profileInfo.instruments}></InstrumentsList>
          <EditBtn onToggleEdit={onToggleEdit}></EditBtn>
        </div>
      }
      {/* <Follow followers={profileInfo.followers} followings={profileInfo.followings}></Follow> */}
      {/* <Bands leadingBands={profileInfo.leadingBands} participatingBands={profileInfo.participatingBands}></Bands> */}
    </div>
  )
}

export default UserProfileInfo;