import React, { ReactElement } from 'react'

// component
import { AudioList, AudioUpload } from 'components/Beathub';

// types
import { Audio } from 'types';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';
import { type } from 'os';

// import dump from './dump.mp3'

// let music: any = dump

// interface Props {
//   Audios: Audio[]
// }

// 더미 오디오 목록
const dummyAudios = [
  {
    userInfo: {
      imageUrl: "string",
      name: "userA"
    },
    title: "RecordA",
    instrument: "instrumentA"
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userB"
    },
    title: "RecordB",
    instrument: "instrumentB"
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userC"
    },
    title: "RecordC",
    instrument: "instrumentC"
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userD"
    },
    title: "RecordD",
    instrument: "instrumentD"
  }
]

// let audioURL = "./dump.mp3"
// let audio = new Audio("dump.wav");

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
