import React, { useState } from 'react';
import ProfileImg from './ProfileImg';
import GroupName from './GroupName';
import HowLong from './HowLong';
import Follow from './Follow'
import Members from './Members'
import ApplyBtn from './ApplyBtn'
// import Instruments from './Instruments';
// import EditForm from './EditForm';
// import EditBtn from './EditBtn';

function GroupProfileInfo() {

  const [ onEdit, setOnEdit ] = useState<boolean>(false)

  const onToggleEdit = () => {
    setOnEdit(!onEdit)
  }

  return (
    <div>
      <ProfileImg></ProfileImg>
      {onEdit ?
        <div>
          {/* <EditForm onToggleEdit={onToggleEdit}></EditForm> */}
        </div>
        :
        <div>
          <GroupName></GroupName>
          <HowLong></HowLong>
          {/* <Instruments></Instruments>
          <EditBtn onToggleEdit={onToggleEdit}></EditBtn> */}
        </div>
      }
      <Follow></Follow>
      <Members></Members>
      <ApplyBtn></ApplyBtn>
    </div>
  )
}

export default GroupProfileInfo;