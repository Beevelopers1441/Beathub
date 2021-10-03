import React from 'react';

// styles
import { Autocomplete } from '@mui/material';
import Wrapper from './styles';

interface Props {
  width: string;
  bandList: string[];
  setCurrBand: React.Dispatch<React.SetStateAction<string | null>>;
}

function BandPicker({ width, bandList, setCurrBand }: Props): React.ReactElement {

  const handleInstrument = (event: any, value: string | null) => {
    if (event) {}
    setCurrBand(value)
  }

  return (
    <Wrapper>
      <Autocomplete
        sx={{
          display: 'inline-block',
          width: width,
          '& input': {
            bgcolor: 'transparent',
            color: 'white',
          },
        }}
        id="bandPicker"
        onChange={handleInstrument}
        options={bandList}
        renderInput={params => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="밴드를 선택해주세요."
            />
          </div>
        )}
      />
    </Wrapper>
  );
}

export default BandPicker;
