import React from 'react';

// styles
import { Autocomplete } from '@mui/material';
import { MusicNoteOutlined } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  width: string;
}

const instList = ['전체', '드럼', '기타', '베이스', '보컬'];

function InstrumentPicker({ width }: Props): React.ReactElement {

  return (
    <Wrapper>
      <MusicNoteOutlined className="music-icon" />
      <Autocomplete 
        sx={{
          display: 'inline-block',
          width: width,
          '& input': {
            bgcolor: 'transparent',
            color: 'white',
          },
        }}
        id="instPicker"
        options={instList}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder="악기를 선택해주세요." />
          </div>
        )}
      />
    </Wrapper>
  )
}

export default InstrumentPicker;