import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
import { getBucketInfo, getBucketAudios } from 'lib/api/beathub';

//modules
import { setBucketAudioAction } from 'modules/beathub/actions';


interface MatchParam {
  bucketId: string;
}


const Beathub: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {

  const dispatch = useDispatch();
  
  const commitList = useSelector((state: any) => state.beathub.commitList)
  const bucketList = useSelector((state: any) => state.beathub.bucketList)

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

    getBucketAudios(Number(match.params.bucketId))
    .then(res => {
      const audioList  = res.data
      dispatch(setBucketAudioAction({audioList}))
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
            <AudioList Audios={bucketList} />
            <Container className="upload-container">
              <AudioUpload bucketId={bucketInfo.id}/>
            </Container>
          </Grid>
        </Grid>
    </Wrapper>

  )
}

export default Beathub;
