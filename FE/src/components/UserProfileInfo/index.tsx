import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import ProfileImg from './ProfileImg';
import Nickname from './Nickname';
import Intro from './Intro';
import InstrumentsList from './InstrumentsList';
import EditForm from './EditForm';
import EditBtn from './EditBtn';
import Follow from './Follow';
import BandsList from './BandsList';

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
      <Follow followers={profileInfo.followers} followings={profileInfo.followings}></Follow>
      <BandsList participatingBands={profileInfo.participatingBands}></BandsList>
    </div>
  )
}

export default UserProfileInfo;