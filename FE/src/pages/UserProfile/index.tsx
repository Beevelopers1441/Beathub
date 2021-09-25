import React from 'react';

// Components
import { Header } from 'components';
import UserProfileInfo from 'components/UserProfileInfo';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

function UserProfile() {
  return(
    <Wrapper>
      <Header />
      <Container className="user-profile-container">
      <UserProfileInfo></UserProfileInfo>
      </Container>
    </Wrapper>
  )
}

export default UserProfile;