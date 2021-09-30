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
import dumpImage from './dump.png'
// 더미 오디오 목록
const dummyAudios = [
  {
    userInfo: {
      imageUrl: dumpImage,
      name: "userA"
    },
    title: "RecordA",
    instrument: "drum",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
  },
  {
    userInfo: {
      imageUrl: dumpImage,
      name: "userB"
    },
    title: "RecordB",
    instrument: "guitar",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
    
  },
  {
    userInfo: {
      imageUrl: dumpImage,
      name: "userC"
    },
    title: "RecordC",
    instrument: "drum",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
  },
  {
    userInfo: {
      imageUrl: dumpImage,
      name: "userD"
    },
    title: "RecordD",
    instrument: "drum",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
  }
]

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
