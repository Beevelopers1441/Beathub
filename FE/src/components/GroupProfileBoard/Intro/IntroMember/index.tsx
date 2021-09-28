import React from 'react';

import { Grid } from '@mui/material';
import Wrapper from './styles';

function IntroMember() {
  return(
    <Wrapper>
      <Grid container>
        <Grid item xs={2}>
          <div className="title">멤버</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default IntroMember;