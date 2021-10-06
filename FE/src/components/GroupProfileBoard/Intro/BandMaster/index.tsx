import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImg from 'components/atoms/ProfileImage';

import { Grid, Tooltip } from '@mui/material';
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
          <Tooltip title={master.name} placement="bottom">
            <div className="img-wrapper">
              <Link to={`/profile/${master.id}`}>
                <ProfileImg url={master.imageUrl} className="profile-img"></ProfileImg>
              </Link>
            </div>
          </Tooltip>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default BandMaster;