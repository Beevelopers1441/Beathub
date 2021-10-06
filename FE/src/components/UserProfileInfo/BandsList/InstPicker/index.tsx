import React from 'react';

// styles
import { Autocomplete } from '@mui/material';
import { MusicNoteOutlined } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  width: string;
  instList: string[];
  setCurrInst: React.Dispatch<React.SetStateAction<string | null>>;
}

function InstPicker({ width, setCurrInst, instList }: Props): React.ReactElement {

  const handleInstrument = (event: any, value: string | null) => {
    if (event) {}
    setCurrInst(value)
  }

  return (
    <Wrapper>
      <Autocomplete
        sx={{
          display: 'inline-block',
          width: width,
          '& input': {
            bgcolor: 'transparent',
            color: '#444',
          },
        }}
        id="instPicker"
        onChange={handleInstrument}
        options={instList}
        renderInput={params => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="악기를 선택해주세요."
            />
          </div>
        )}
      />
    </Wrapper>
  );
}

export default InstPicker;
