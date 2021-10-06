import React, { useState } from "react";
import BeathubList from "../BeathubList";

import Wrapper from './styles'
import play from 'assets/svgs/beathub/play.svg';
import pause from 'assets/svgs/beathub/pause.svg';
import stop from 'assets/svgs/beathub/stop.svg';

import { AudioInfo } from 'types';

interface Props {
  Audios: AudioInfo[]
}

function BeathubMain({ Audios }: Props) {

  const [ totalPlaying, setTotalPlaying ] = useState(false);

  const onClickTotalPlay = () => {
    setTotalPlaying(!totalPlaying)
  }

  const onClickStop = () => {
    setTotalPlaying(false)
  }

  return (
    <Wrapper>
      <BeathubList Audios={Audios} totalPlaying={totalPlaying}></BeathubList>
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