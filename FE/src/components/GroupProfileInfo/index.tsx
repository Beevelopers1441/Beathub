import React, { useState } from 'react';

// components
import ProfileImg from './ProfileImg';
import GroupName from './GroupName';
import HowLong from './HowLong';
import Follow from './Follow'
import MembersList from './MembersList'
import ApplyBtn from './ApplyBtn'
// import Instruments from './Instruments';
// import EditForm from './EditForm';
// import EditBtn from './EditBtn';

// types
import { BandProfileInfo } from 'types';

interface Props {
  bandInfo: BandProfileInfo;
}


const GroupProfileInfo: React.FC<Props> = ({ bandInfo }) => {

  const [ onEdit, setOnEdit ] = useState<boolean>(false)

  const onToggleEdit = () => {
    setOnEdit(!onEdit)
  }

  return (
    <div>
      <ProfileImg imageUrl={bandInfo.band.imageUrl}></ProfileImg>
      {onEdit ?
        <div>
          {/* <EditForm onToggleEdit={onToggleEdit}></EditForm> */}
        </div>
        :
        <div>
          <GroupName groupName={bandInfo.band.name}></GroupName>
          <HowLong></HowLong>
          {/* <Instruments></Instruments>
          <EditBtn onToggleEdit={onToggleEdit}></EditBtn> */}
        </div>
      }
      <Follow></Follow>
      <MembersList members={bandInfo.members}></MembersList>
      <ApplyBtn></ApplyBtn>
    </div>
  )
}

export default GroupProfileInfo;