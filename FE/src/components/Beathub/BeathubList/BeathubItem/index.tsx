import React, { useState, useEffect } from 'react';
import MusicWave from './MusicWave';

import Wrapper from './styles';

import { AudioInfo } from 'types';

import play from 'assets/svgs/beathub/play.svg';
import pause from 'assets/svgs/beathub/pause.svg';
import stop from 'assets/svgs/beathub/stop.svg';

interface Props {
  AudioInfo: AudioInfo;
  totalPlaying: boolean,
}

function BeathubItem({ AudioInfo, totalPlaying }: Props ) {

  const [playing, setPlaying] = useState<boolean>(false)

  const onClickPlay = () => {
    setPlaying(!playing)
  }

  const onClickStop = ()=> {
    setPlaying(false)
  }

  useEffect(() => {
    setPlaying(totalPlaying)
  }, [totalPlaying])

  return (
    <Wrapper>
      <div className="item-box">
        <div className="first-row">
          <div className="instrument">{AudioInfo.instrumentType}</div>
          <div className="track-title">{AudioInfo.filename}</div>
          <div className="nickname">{AudioInfo.uploader.name}</div>
        </div>
        <div className="second-row">
          <div className="musicwave">
            <MusicWave Audio={AudioInfo.filepath} playing={playing}></MusicWave>
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
          <div className="delete-btn">삭제</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BeathubItem;
