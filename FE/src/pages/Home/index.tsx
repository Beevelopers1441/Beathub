import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Posts, LinkTab, CommunitySearch } from 'components/Community';

// api
import { getBandPosts, getMemberPosts } from 'lib/api/community';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types
import { IPost } from 'types';

// dummies
// import { dummyAudios } from './dump'

interface Props {}

function Home(props: Props): React.ReactElement {

  return (
    <Wrapper>
      <Container className="home-container">
        <Grid container className="sub-container">
          <Grid item xs={10}>
            <h1>HOME</h1>
          </Grid>
          <Grid item xs={2}>
            <h1>HOME</h1>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Home;
