import React from 'react';

import { Grid } from '@mui/material';
import Wrapper from './styles';

function Content() {
  return(
    <Wrapper>
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">밴드 마스터</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <img src="ss" />
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Content;