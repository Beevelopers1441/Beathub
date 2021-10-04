import React from 'react';
import ProfileImg from 'components/atoms/ProfileImage';

import { Grid } from '@mui/material';
import Wrapper from './styles';

import { Leader } from 'types';

interface Props {
  master: Leader;
}

const BandMaster: React.FC<Props> = ({ master }) => {
  return(
    <Wrapper>
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">밴드 마스터</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <ProfileImg url={master.imageUrl} className="profile-img"></ProfileImg>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default BandMaster;