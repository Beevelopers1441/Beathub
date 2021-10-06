import React, { useState } from 'react';
import MusicWave from './MusicWave';

import Wrapper from './styles';

import { AudioInfo } from 'types';

// styles
import {
  Chip, Avatar
} from '@mui/material';

// assets
import drum from 'assets/svgs/instruments/drum-solid.svg'
import guitar from 'assets/svgs/instruments/guitar-solid.svg'
import play from 'assets/svgs/beathub/play.svg';
import pause from 'assets/svgs/beathub/pause.svg';
import stop from 'assets/svgs/beathub/stop.svg';

const instrumentUrl: {[key: string]: string} = {
  "drum": drum,
  "guitar": guitar,
  "piano": drum,
  "vocal": drum
}

interface Props {
  AudioInfo: AudioInfo;
}

function AudioListItem({ AudioInfo }: Props ) {

  // 재생 여부
  const [playing, setPlaying] = useState<boolean>(false)

  // 악기 아이콘
  const instrument = AudioInfo.instrument
  const instrumentSrc = instrumentUrl[instrument]

  const onClickPlay = () => {
    setPlaying(!playing)
  }

  const onClickStop = ()=> {
    setPlaying(false)
  }

  return (
    <Wrapper>
      <div className="item-box">
        <div className="first-row">
          <div className="instrument">
            <Chip icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>}  variant="outlined" color="primary" label={AudioInfo.instrument} />
          </div>
          <div className="track-title">{AudioInfo.title}</div>
          <div className="nickname">{AudioInfo.userInfo.name}</div>
        </div>
        <div className="second-row">
          <div className="musicwave">
            <MusicWave Audio={AudioInfo.fileUrl} playing={playing}></MusicWave>
            <div></div>
          </div>
        </div>
        <div className="third-row">
          {/* 재생/일시정지 버튼 */}
          <div className="btns">
            <div onClick={onClickPlay}>
              {playing
                ? <img src={pause} alt="pause" className="play-btn"/>
                : <img src={play} alt="play" className="play-btn"/>
              }
            </div>
            {/* 정지 버튼 */}
            <div className="btn-stop" onClick={onClickStop}>
              <img src={stop} alt="play" className="play-btn"/>
            </div>
          </div>
          <button className="add-btn">
            <div className="add-btn-letter">Add</div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default AudioListItem;
