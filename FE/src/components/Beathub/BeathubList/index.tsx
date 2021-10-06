import React from 'react';
import BeathubItem from './BeathubItem';

import Wrapper from './styles';

import { AudioInfo } from 'types';

interface Props {
  bucketAudios: AudioInfo[],
  commitAudios: AudioInfo[],
  totalPlaying: boolean,
}

function BeathubList({ commitAudios, bucketAudios, totalPlaying }: Props) {
  return (
    <Wrapper>
      <div className="audios-container">
        {commitAudios && commitAudios.length >= 1
        ? commitAudios.map((AudioItem:AudioInfo, idx:number) => (
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
