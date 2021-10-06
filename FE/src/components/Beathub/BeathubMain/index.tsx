import React, { useState } from "react";
import BeathubList from "../BeathubList";

import Wrapper from './styles'
import play from 'assets/svgs/beathub/play.svg';
import pause from 'assets/svgs/beathub/pause.svg';
import stop from 'assets/svgs/beathub/stop.svg';

import { AudioInfo } from 'types';
import { BucketInfo } from 'types';

interface Props {
  commitAudios: AudioInfo[],
  bucketInfo: BucketInfo
}

function BeathubMain({ commitAudios, bucketInfo }: Props) {

  const [ totalPlaying, setTotalPlaying ] = useState(false);

  const [ totalRestart, setTotalRestart] = useState(false);

  const onClickTotalPlay = () => {
    setTotalPlaying(!totalPlaying)
    setTotalRestart(false)
  }

  const onClickStop = () => {
    setTotalPlaying(false)
    setTotalRestart(true)
  }

  return (
    <Wrapper>
      <BeathubList commitAudios={commitAudios} bucketAudios={bucketInfo.audios} totalPlaying={totalPlaying} totalRestart={totalRestart}></BeathubList>
      <div className="btn-container">
        {totalPlaying
          ? <img src={pause} alt="pause" className="play-btn" onClick={onClickTotalPlay}/>
          : <img src={play} alt="play" className="play-btn" onClick={onClickTotalPlay}/>
        }
        <img src={stop} alt="play" className="play-btn" onClick={onClickStop}/>
      </div>
    </Wrapper>
  );
}

export default BeathubMain;