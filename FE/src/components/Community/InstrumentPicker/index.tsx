import React, { useEffect, useRef } from 'react';

// styles
import { Autocomplete } from '@mui/material';
import { MusicNoteOutlined } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  width: string;
  setCurrInst: React.Dispatch<React.SetStateAction<string | null>>;
}

const instList = ['보컬', '키보드', '일렉기타', '어쿠스틱기타', '베이스', '드럼', '기타(etc)'];

function InstrumentPicker({ width, setCurrInst }: Props): React.ReactElement {
  const instRef: any = useRef();

  const handleInstrument = (event: any, value: string | null) => {
    if (event) {}
    setCurrInst(value)
  }

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

export default InstrumentPicker;
