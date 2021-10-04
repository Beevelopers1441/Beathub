import React from 'react';

import FollowBtn from './FollowBtn';
import Followers from './Followers';
import DMBtn from '../DMBtn';

import Wrapper from './styles';
import { Grid } from '@mui/material';

function Follow() {
  return(
    <Wrapper>

      <Grid container>
        <Grid item xs={10}>
          <FollowBtn></FollowBtn>
        </Grid>
        <Grid item xs={2}>
          <DMBtn></DMBtn>
        </Grid>
      </Grid>

      <Followers></Followers>
    </Wrapper>
  )
}

export default Follow;