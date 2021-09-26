import React, { useState } from 'react';
import ProfileImg from './ProfileImg';
import GroupName from './GroupName';
// import Intro from './Intro';
// import Instruments from './Instruments';
// import EditForm from './EditForm';
// import EditBtn from './EditBtn';
// import Follow from './Follow'
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
          {/* <Intro></Intro>
          <Instruments></Instruments>
          <EditBtn onToggleEdit={onToggleEdit}></EditBtn> */}
        </div>
      }
      {/* <Follow></Follow>
      <Bands></Bands> */}
    </div>
  )
}

export default GroupProfileInfo;