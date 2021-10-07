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
        {Audios
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <AudioListItem AudioInfo={AudioItem} key={idx} />
          ))
          : <div></div>
        }
      </div>
      <div className="divider"></div>
    </Wrapper>
  );
}

export default AudioList;
