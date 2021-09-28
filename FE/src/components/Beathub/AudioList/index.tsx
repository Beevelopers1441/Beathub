import React from 'react';

// component
import AudioListItem  from 'components/Beathub/AudioListItem';

// types
import { Audio } from 'types';

// styles
import { Grid } from '@mui/material';
import Wrapper from './styles';

interface Props {
  Audios: Audio[];
}


function AudioList({ Audios }: Props): React.ReactElement {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={3} className="user-info-container">
          {Audios
          ? Audios.map((AudioItem:Audio, idx:number) => (
              <AudioListItem Audio={AudioItem} key={idx} />
            ))
            : <div></div>
          }
          

          
          
        </Grid>
        <Grid item xs={9}>
          <p>grid</p>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default AudioList;
