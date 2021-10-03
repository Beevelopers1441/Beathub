import React from 'react';
import MusicWave from './MusicWave';

import Wrapper from './styles';

import { AudioInfo } from 'types';

interface Props {
  AudioInfo: AudioInfo;
}

function BeathubItem({ AudioInfo }: Props ) {
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
            <MusicWave Audio={AudioInfo.fileUrl}></MusicWave>
            <div></div>
          </div>
        </div>
        <div className="third-row">
          <div className="btns">
            <div className="btn-play">재생/일시정지</div>
            <div className="btn-stop">정지</div>
          </div>
          <div className="delete-btn">삭제</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BeathubItem;
