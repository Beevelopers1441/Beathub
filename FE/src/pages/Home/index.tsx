import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import { AudioList, AudioVisualizer } from 'components/Beathub';
import { ListForHome } from 'components/Community';

// api
import { getBandPosts, getMemberPosts } from 'lib/api/community';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types

// dummies
import { dummyAudios } from '../Beathub/dump'

interface Props {}

function Home(props: Props): React.ReactElement {

  return (
    <Wrapper>
      <Grid container className="home-container">
        <Grid item xs={8} className="main-container">
          <AudioVisualizer/>
        </Grid>
        <Grid item xs={4} className="sub-container">
          <AudioList Audios={dummyAudios} />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Home;
