import React from 'react';

import { Grid } from '@mui/material';
import Wrapper from './styles';

function IntroContent() {
  return(
    <Wrapper>
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">소개글</div>
        </Grid>
        <Grid item xs={10}>
          <div className="content">안녕하세요! 서민수가 만든 대학교 52기 동아리 밴드입니다!!! 저희가 주로 하는 음악은 헤비메탈입니다. 많은 관심 부탁드려요~</div>
        </Grid>
      </Grid>
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

export default IntroContent;