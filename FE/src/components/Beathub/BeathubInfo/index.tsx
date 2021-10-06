import React from 'react';

import Wrapper from './styles';
import { Grid, Button } from '@mui/material';

import { BucketInfo } from 'types';


interface Props {
  bucketInfo: BucketInfo
}

function BeathubInfo( {bucketInfo}: Props) {

  return (
    <Wrapper>
      <Grid container spacing={1} className="container">
        <Grid item xs={10}>
          <div className="title">{bucketInfo.title}</div>
          <div className="introduction">{bucketInfo.introduction}</div>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" className="button">
            음악 저장
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BeathubInfo;