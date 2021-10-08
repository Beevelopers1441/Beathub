import React from 'react';

// component
import InstrumentPicker from '../InstrumentPicker';

// styles
import { Search } from '@mui/icons-material';
import {  Button } from '@mui/material';
import Wrapper from './styles';

interface Props {
  setCurrTag: React.SetStateAction<any>;
  handleInputs: any;
  titleRef: React.RefObject<any>;
}

function CommunitySearch({
  setCurrTag,
  handleInputs,
  titleRef,
}: Props): React.ReactElement {


  return (
    <Wrapper>
      <div className="title-input-container">
        <Search className="search-icon" />
        <input
          type="text"
          ref={titleRef}
          onKeyPress={handleInputs}
          className="search-input"
          placeholder="제목을 검색해보세요!"
        ></input>
      </div>
      <InstrumentPicker width={'20rem'} setCurrInst={setCurrTag} />
      <Button
        id="search-button"
        className="search-button"
        onClick={handleInputs}
      >
        검색
      </Button>
    </Wrapper>
  );
}

export default CommunitySearch;