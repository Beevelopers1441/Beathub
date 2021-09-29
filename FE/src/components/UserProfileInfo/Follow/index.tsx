import React from 'react';
import { useSelector } from 'react-redux';

import FollowBtn from './FollowBtn';
import Followers from './Followers';
import Followings from './Followings';
import DMBtn from '../DMBtn';

import Wrapper from './styles';
import { Grid } from '@mui/material';

import { FollowPerson } from 'types';

interface Props {
  id: number,
  followers: FollowPerson[],
  followings: FollowPerson[]
}

const Follow: React.FC<Props> = ({ id, followers, followings }) => {

  const userId = useSelector((state: any) => state.user.userInfo.id)

  return(
    <Wrapper>
      { id !== userId &&
        <Grid container>
          <Grid item xs={10}>
            <FollowBtn></FollowBtn>
          </Grid>
          <Grid item xs={2}>
            <DMBtn></DMBtn>
          </Grid>
        </Grid>
      }
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