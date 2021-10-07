import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import { AudioListForHome, AudioVisualizer } from 'components/Beathub';

// api
import { getBandPosts, getMemberPosts } from 'lib/api/community';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types

// dummies
import { dummyAudios } from '../BeathubPage/Beathub/dump'

interface Props {}

function Home(props: Props): React.ReactElement {

  return (
    <Wrapper>
      <Grid container className="home-container">
        <Grid item xs={1} ></Grid>       
        <Grid item xs={7} className="main-container">
          <AudioVisualizer/>
        </Grid>
        <Grid item xs={3} className="sub-container">
          <AudioListForHome Audios={dummyAudios} />
        </Grid>
        <Grid item xs={1} ></Grid>   
      </Grid>
    </Wrapper>
  );
}

export default Home;
