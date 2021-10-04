import React from 'react';
import Navbar from './Navbar';

import Wrapper from './styles';

// types
import { ProfileInfo } from 'types';

interface Props {
  profileInfo: ProfileInfo;
}

const UserProfileBoard: React.FC<Props> = ({ profileInfo }) => {
  return (
    <Wrapper>
      <Navbar profileInfo={profileInfo}></Navbar>
    </Wrapper>
  )
}

export default UserProfileBoard;