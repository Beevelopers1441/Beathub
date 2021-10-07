import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MusicWave from './MusicWave';

// styles
import { Chip, Avatar } from '@mui/material';
import Wrapper from './styles';

import { AudioInfo } from 'types';

// actions
import { removeAction } from 'modules/beathub/actions';

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
  totalPlaying: boolean,
  totalRestart: boolean,
  audioIdx: number
}

function BeathubItem({ AudioInfo, totalPlaying, totalRestart, audioIdx }: Props ) {

  const dispatch = useDispatch();

  // 재생 여부
  const [playing, setPlaying] = useState<boolean>(false)

  // 정지 여부
  const [restart, setRestart] = useState<boolean>(false);

  const onClickPlay = () => {
    setPlaying(!playing)
    setRestart(false)
  }

  const onClickStop = ()=> {
    setPlaying(false)
    setRestart(true)
  }

  const onClickDelete = () => {
    dispatch(removeAction({audioIdx}))
  }

  useEffect(() => {
    setPlaying(totalPlaying)
    setRestart(totalRestart)
  }, [totalPlaying, totalRestart])

  // 악기 아이콘
  const instrument = AudioInfo.instrumentType
  const instrumentSrc = instrumentUrl[instrument]

  return (
    <Wrapper>
      <div className="item-box">
        <div className="first-row">
          <div className="instrument">
            <Chip icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>}  variant="outlined" color="primary" label={AudioInfo.instrumentType} />
          </div>
          <div className="track-title">{AudioInfo.filename}</div>
          <div className="nickname">{AudioInfo.uploader.name}</div>
        </div>
        <div className="second-row">
          <div className="musicwave">
          <MusicWave Audio={AudioInfo.filepath} playing={playing} restart={restart}></MusicWave>
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
          <button className="delete-btn" onClick={onClickDelete}>
            <div className="delete-btn-letter">Delete</div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default BeathubItem;
