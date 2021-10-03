import React, { ReactElement } from 'react'

// component
import { AudioList, AudioUpload, BeathubList } from 'components/Beathub';

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
          <Grid item xs={6}>
            <BeathubList Audios={dummyAudios}></BeathubList>
          </Grid>
          <Grid item xs={6}>
            <AudioUpload />
            <AudioList Audios={dummyAudios} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>

  )
}

export default Beathub
