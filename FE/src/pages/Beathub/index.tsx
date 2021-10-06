import React, { ReactElement } from 'react'

// component
import { AudioList, AudioUpload, BeathubMain } from 'components/Beathub';

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
      <Container className="upload-container">
        <AudioUpload />
      </Container>
        <Grid container className="beathub-container">
          <Grid item xs={8} className="editor-container">
            <h1>Audio Editor</h1>  
        </Grid>
          <Grid item xs={4} className="audio-info-container">
            <AudioList Audios={dummyAudios} />
          </Grid>
        </Grid>
    </Wrapper>

  )
}

export default Beathub
