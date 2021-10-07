import React from 'react';
// import { FixedSizeList} from 'react-window'

// component
import AudioListItemForHome  from '../AudioListItemForHome';

// types
import { AudioInfo } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  Audios: AudioInfo[];
}


function AudioListForHome({ Audios }: Props): React.ReactElement {
  return (
    <Wrapper>
      <h1>New Upload</h1>
      <div className="audios-container">
        {Audios
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <AudioListItemForHome AudioInfo={AudioItem} key={idx} />
          ))
          : <div></div>
        }
      </div>
      <div className="divider"></div>
    </Wrapper>
  );
}

export default AudioListForHome;
