import React from 'react';

// Components
import { GroupProfileInfo, GroupProfileBoard } from 'components';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

function GroupProfile() {
  return(
    <Wrapper>
      <Container className="group-profile-container">
        <Grid container>
          <Grid item xs={4}>
            <GroupProfileInfo></GroupProfileInfo>
          </Grid>
          <Grid item xs={8}>
            <GroupProfileBoard></GroupProfileBoard>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default GroupProfile;