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
// 더미 오디오 목록
const dummyAudios = [
  {
    userInfo: {
      imageUrl: "string",
      name: "userA"
    },
    title: "RecordA",
    instrument: "instrumentA",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userB"
    },
    title: "RecordB",
    instrument: "instrumentB",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
    
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userC"
    },
    title: "RecordC",
    instrument: "instrumentC",
    fileUrl: "https://beathub-bucket.s3.ap-northeast-2.amazonaws.com/2/2_audio3.mp3"
  },
  {
    userInfo: {
      imageUrl: "string",
      name: "userD"
    },
    title: "RecordD",
    instrument: "instrumentD",
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
