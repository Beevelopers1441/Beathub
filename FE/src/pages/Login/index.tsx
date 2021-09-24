import React from 'react';

// Components
import SocialAuth from '../../components/SocialAuth'

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types
// import { IPost } from 'types';

interface Props {}

function index(props: Props): React.ReactElement {
  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={1} sm={2} md={4}></Grid>
          <Grid item xs={10} sm={8} md={4} className="login-container">
            <div className="modal-container">
              <h1>Beathub</h1>
              <p>Find your team and Play together</p>
              <SocialAuth></SocialAuth>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default index;