import React from 'react';

import FollowBtn from './FollowBtn';
import Followers from './Followers';
import Followings from './Followings';
import DMBtn from '../DMBtn';

import Wrapper from './styles';
import { Grid } from '@mui/material';

import { FollowPerson } from 'types';

interface Props {
  followers: FollowPerson[],
  followings: FollowPerson[]
}

const Follow: React.FC<Props> = ({ followers, followings }) => {

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

      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4}>
          <Followers followers={followers}></Followers>
        </Grid>
        <Grid item xs={4}>
          <Followings followings={followings}></Followings>
        </Grid>
      </Grid> 
    </Wrapper>
  )
}

export default Follow;