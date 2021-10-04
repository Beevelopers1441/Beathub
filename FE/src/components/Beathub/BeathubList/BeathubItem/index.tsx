import React, { useState } from 'react';
import MusicWave from './MusicWave';

import Wrapper from './styles';

import { AudioInfo } from 'types';

import play from 'assets/svgs/beathub/play.svg';
import pause from 'assets/svgs/beathub/pause.svg';
import stop from 'assets/svgs/beathub/stop.svg';

interface Props {
  AudioInfo: AudioInfo;
}

function BeathubItem({ AudioInfo }: Props ) {

  const [playing, setPlaying] = useState<boolean>(false)

  const onClickPlay = () => {
    setPlaying(!playing)
  }

  console.log(AudioInfo)

  return (
    <Wrapper>
      <div className="item-box">
        <div className="first-row">
          <div className="instrument">{AudioInfo.instrument}</div>
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
            <div className="btn-stop">
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
