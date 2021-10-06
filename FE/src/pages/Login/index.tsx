import React from 'react'
import { useHistory } from 'react-router-dom';

// Components
import SocialAuth from '../../components/SocialAuth'

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// for close button
import CloseIcon from '@mui/icons-material/Close'
import { deepPurple } from '@mui/material/colors';

// assets
import logo from 'assets/svgs/logo.svg'

function Login(): React.ReactElement {

  const history = useHistory();

  return (
    <Wrapper className="img-background">
      <Container>
        <Grid container>
          <Grid item xs={1} sm={2} md={4}></Grid>
          <Grid item xs={10} sm={8} md={4} className="login-container">
            <div className="btn-close">
              <CloseIcon sx={{ color: deepPurple["A400"] }} onClick={()=>history.push('/')} />
            </div>
            <div className="modal-container">
              <h1>Beathub</h1>
              <p>Find your team and Play together</p>
              <img className="img-logo" alt="logo" src={logo} />
              {/* <Avatar alt="logo" src={logo} sx={{ width: 20, height: 20 }}/> */}
              <SocialAuth></SocialAuth>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Login;