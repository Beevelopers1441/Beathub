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
        {Audios
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <BeathubItem AudioInfo={AudioItem} totalPlaying={totalPlaying} key={idx} />
          ))
          : <div></div>
        }
      </div>
      <div className="divider"></div>
    </Wrapper>
  );
}

export default BeathubList;
