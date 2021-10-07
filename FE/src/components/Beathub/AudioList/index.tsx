import React from 'react';
// import { FixedSizeList} from 'react-window'

// component
import AudioListItem  from 'components/Beathub/AudioListItem';

// types
import { AudioInfo } from 'types';

// styles
import { Grid } from '@mui/material';
import Wrapper from './styles';

interface Props {
  Audios: AudioInfo[];
}


function AudioList({ Audios }: Props): React.ReactElement {
  return (
    <Wrapper>
      <h1>New Upload</h1>
      {/* <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      > */}
      <div className="audios-container">
        {Audios
        ? Audios.map((AudioItem:AudioInfo, idx:number) => (
            <AudioListItem AudioInfo={AudioItem} key={idx} />
          ))
          : <div></div>
        }
      </div>
      {/* </FixedSizeList> */}

    </Wrapper>
  );
}

export default AudioList;
