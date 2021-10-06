import React from 'react';
import BeathubItem from './BeathubItem';

import Wrapper from './styles';

import { AudioInfo } from 'types';

interface Props {
  Audios: AudioInfo[],
  totalPlaying: boolean,
}

function BeathubList({ Audios, totalPlaying }: Props) {
  return (
    <Wrapper>
      <div className="audios-container">
        {Audios && Audios.length >= 1
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <BeathubItem AudioInfo={AudioItem} totalPlaying={totalPlaying} key={idx} />
          ))
          : 
          <div className="audios-empty">
            연주를 추가하세요!
          </div>
        }
      </div>
      <div className="divider"></div>
    </Wrapper>
  );
}

export default BeathubList;
