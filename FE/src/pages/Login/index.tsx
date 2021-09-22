import React, { useState, useEffect } from 'react';

// Components
// import { Posts, LinkTab, TagList, CommunitySearch } from 'components/Community';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types
// import { IPost } from 'types';

function index() {
  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={1} sm={2} md={4}></Grid>
          <Grid item xs={10} sm={8} md={4} className="login-container">
            <div className="modal-container">
              <h2>Beathub</h2>
              <p>Find your team and Play together</p>
              <button className="btn-kakao">카카오로 로그인 하기</button>
              <button className="btn-google">구글로 로그인 하기</button>
            </div>
            {/* <p onClick={() => handleTeamFlag(0)} className="teamFlag">팀 구하기</p> */}
            {/* <p onClick={() => handleTeamFlag(0)} className="teamFlag">팀 구하기</p> */}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default index;