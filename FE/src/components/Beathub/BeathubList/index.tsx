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

  // Prop으로 받은 악기 목록의 각각의 악기들을 InstrumentsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] => {
    return commitAudios.map((AudioItem, index) => {
      const audioIdx = index
      return(
        <BeathubItem AudioInfo={AudioItem} totalPlaying={totalPlaying} key={index} audioIdx={audioIdx}></BeathubItem>
      )
    })
  }

  return (
    <Wrapper>
      <div className="audios-container">
        {commitAudios && commitAudios.length >= 1
          ?
          <div>
            {renderList()}
          </div>
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
