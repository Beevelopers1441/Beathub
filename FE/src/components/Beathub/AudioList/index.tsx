import React from 'react';
// import { FixedSizeList} from 'react-window'

// component
import AudioListItem  from '../AudioListItem';

// types
import { AudioInfo } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  Audios: AudioInfo[];
}


function AudioList({ Audios }: Props): React.ReactElement {
  return (
    <Wrapper>
      <div className="audios-container">
        {Audios && Audios.length >= 1
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <AudioListItem AudioInfo={AudioItem} key={idx} />
          ))
          : <div className="audios-empty">음악 파일이 없습니다.</div>
        }
      </div>
      <div className="divider"></div>
    </Wrapper>
  );
}

export default AudioList;
