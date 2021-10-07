import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import { AudioList, AudioUpload, BeathubMain, BeathubInfo } from 'components/Beathub';

// types
import { AudioInfo } from 'types';
import { BucketInfo } from 'types';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';
import { type } from 'os';

// apis
import { getBucketInfo } from 'lib/api/beathub';

// import dump from './dump.mp3'

// let music: any = dump

// interface Props {
//   Audios: Audio[]
// }

// dummies
import { dummyAudios } from './dump'


interface MatchParam {
  bucketId: string;
}


const Beathub: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {
  
  const commitList = useSelector((state: any) => state.beathub.commitList)

  const [bucketInfo, setBucketInfo] = useState<BucketInfo>({
    audios: [],
    bpm: 0,
    commits: [],
    contributors: [],
    id: 0,
    introduction: "",
    title: ""
  })

  useEffect(() => {
    getBucketInfo(Number(match.params.bucketId))
    .then(res => {
      const totalInfo = res.data
      setBucketInfo({
        audios: totalInfo.audios,
        bpm: totalInfo.bpm,
        commits: totalInfo.commits,
        contributors: totalInfo.contributors,
        id: totalInfo.id,
        introduction: totalInfo.introduction,
        title: totalInfo.title
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Wrapper>
        <BeathubInfo bucketInfo={bucketInfo}></BeathubInfo>
        <Grid container className="beathub-container">
          <Grid item xs={8} className="editor-container">
            {/* <h1>Audio Editor</h1> */}
            <BeathubMain commitAudios={commitList} bucketInfo={bucketInfo}></BeathubMain>
          </Grid>
          <Grid item xs={4} className="audio-info-container">
            <AudioList Audios={dummyAudios} />
            <Container className="upload-container">
              <AudioUpload />
            </Container>
          </Grid>
        </Grid>
    </Wrapper>

  )
}

export default Beathub;
