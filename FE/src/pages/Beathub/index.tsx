import React, { ReactElement } from 'react'

// component
import { AudioList, AudioUpload } from 'components/Beathub';

// types
import { AudioInfo } from 'types';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';
import { type } from 'os';

// import dump from './dump.mp3'

// let music: any = dump

// interface Props {
//   Audios: Audio[]
// }

// dummies
import { dummyAudios } from './dump'


function Beathub(): ReactElement {
  
  return (
    <Wrapper>
      <Container className="beathub-container">
        <Grid container className="sub-container">
          <AudioUpload />
          <AudioList Audios={dummyAudios} />
        </Grid>
      </Container>
    </Wrapper>

  )
}

export default Beathub
