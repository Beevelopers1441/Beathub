import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Components
import UserProfileInfo from 'components/UserProfileInfo';
import UserProfileBoard from 'components/UserProfileBoard';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// apis
import { getUserProfile } from 'lib/api/userProfile'

interface MatchParam {
  userId: string;
}

const UserProfile: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {

  useEffect (() => {
    getUserProfile(Number(match.params.userId))
  })

  return(
    <Wrapper>
      <Container className="user-profile-container">
        <Grid container>
          <Grid item xs={4}>
            <UserProfileInfo></UserProfileInfo>
          </Grid>
          <Grid item xs={8}>
            <UserProfileBoard></UserProfileBoard>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default UserProfile;