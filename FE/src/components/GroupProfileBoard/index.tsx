import React from 'react';
import Navbar from './Navbar';

import Wrapper from './styles';

// types
import { BandProfileInfo } from 'types';

interface Props {
  bandInfo: BandProfileInfo;
}

const UserProfileBoard: React.FC<Props> = ({ bandInfo }) => {
  return (
    <Wrapper>
      <Navbar bandInfo={bandInfo}></Navbar>
    </Wrapper>
  )
}

export default UserProfileBoard;