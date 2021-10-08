import React from 'react';
import { useSelector } from 'react-redux';

// styles
import Wrapper from './styles';
import { Grid, Button } from '@mui/material';

// types
import { BucketInfo } from 'types';

// apis
import { createCommit } from 'lib/api/beathub';


interface Props {
  bucketInfo: BucketInfo
}

function BeathubInfo( {bucketInfo}: Props) {

  const commitList = useSelector((state: any) => state.beathub.commitList)

  console.log(commitList)

  const onClickCommit = () => {
    const bucketId = bucketInfo.id
    const payload = commitList
    createCommit(bucketId, payload)
    .then(res => {
      console.log(res)
    })
  }

  return (
    <Wrapper>
      <Grid container spacing={1} className="container">
        <Grid item xs={10}>
          <div className="title">{bucketInfo.title}</div>
          <div className="introduction">{bucketInfo.introduction}</div>
        </Grid>
        <Grid item xs={2}>
          {/* <Button size="large" variant="contained" className="button" onClick={onClickCommit}>
            Commit
          </Button> */}
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BeathubInfo;