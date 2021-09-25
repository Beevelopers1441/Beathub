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
      <Container className="user-profile-container">
        <Grid container>
          <Grid item xs={4}>
            <UserProfileInfo></UserProfileInfo>
          </Grid>
          <Grid item xs={8}>
            탭
          </Grid>
        </Grid>


      </Container>
    </Wrapper>
  )
}

export default UserProfile;