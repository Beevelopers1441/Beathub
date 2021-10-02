import React from 'react';

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
      {Audios
      ? Audios.map((AudioItem:AudioInfo, idx:number) => (
          <AudioListItem AudioInfo={AudioItem} key={idx} />
        ))
        : <div></div>
      }
    </Wrapper>
  );
}

export default AudioList;
