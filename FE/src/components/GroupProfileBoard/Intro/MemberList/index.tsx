import React from 'react';

import { Grid } from '@mui/material';
import Wrapper from './styles';

function MemberList() {
  return(
    <Wrapper>
      <Grid container>
        <Grid item xs={2}>
          <div className="title">멤버</div>
        </Grid>
        <Grid item xs={2}>
          <div className="item-wrapper">
            <div className="item-letter">기타</div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default MemberList;