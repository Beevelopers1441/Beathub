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
        <Grid item xs={9}>
          <div className="title">{bucketInfo.title}</div>
          <div className="introduction">{bucketInfo.introduction}</div>
        </Grid>
        <Grid item xs={3}>
          <Button>
            음악 저장
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BeathubInfo;