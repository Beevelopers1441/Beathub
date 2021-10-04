import React from 'react';

import { Grid } from '@mui/material';
import Wrapper from './styles';

interface Props {
  introduction: string;
}

const Content: React.FC<Props> = ({ introduction }: Props) => {
  return(
    <Wrapper>
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">소개글</div>
        </Grid>
        <Grid item xs={10}>
          <div className="content">{introduction}</div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Content;