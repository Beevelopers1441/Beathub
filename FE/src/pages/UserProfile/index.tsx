import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Components
import UserProfileInfo from 'components/UserProfileInfo';
import UserProfileBoard from 'components/UserProfileBoard';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

interface MatchParams {
  userId: string;
  boardName: string;
}

const UserProfile: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return(
    <Wrapper>
      { match.params.userId }
      { match.params.boardName }
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