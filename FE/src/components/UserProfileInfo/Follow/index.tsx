import React from 'react';
import Followers from './Followers';
import Followings from './Followings';

import Wrapper from './styles';
import { Grid } from '@mui/material';

function Follow() {
  return(
    <Wrapper>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4}>
          <Followers></Followers>
        </Grid>
        <Grid item xs={4}>
          <Followings></Followings>
        </Grid>
      </Grid> 
    </Wrapper>
  )
}

export default Follow;