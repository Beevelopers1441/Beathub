import React, { useState } from 'react';
import ProfileImg from './ProfileImg';
import GroupName from './GroupName';
import HowLong from './HowLong';
import Follow from './Follow'
// import Instruments from './Instruments';
// import EditForm from './EditForm';
// import EditBtn from './EditBtn';
// import Bands from './Bands'

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
      {/* <Bands></Bands> */}
    </div>
  )
}

export default GroupProfileInfo;