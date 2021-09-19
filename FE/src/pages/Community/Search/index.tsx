import React, { useRef } from 'react';

// styles
import { Search, Tag } from '@mui/icons-material';

import Wrapper from './styles';

interface Props {
  setCurrTitle: React.SetStateAction<any>;
  currTags: string[];
  setCurrTags: React.SetStateAction<any>;
}

function CommunitySearch({
  setCurrTitle,
  currTags,
  setCurrTags,
}: Props): React.ReactElement {

  const titleRef: any = useRef();
  const tagRef: any = useRef();

  const handleInputs = (e: any) => {
    if (e.key === 'Enter') {
      const newTitleValue = titleRef?.current.value.trim();
      const newTagValue = tagRef?.current.value.trim();

      // set title & tags
      setCurrTitle(newTitleValue);
      let newCurrTags = [...currTags];
      if (newTagValue && newCurrTags.indexOf(newTagValue) === -1) {
        newCurrTags = [...newCurrTags, newTagValue];
        setCurrTags(newCurrTags);
      }

      // init tag value
      tagRef.current.value = '';
    }
  };

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
      <div className="tag-input-container">
        <Tag className="search-icon" />
        <input
          type="text"
          ref={tagRef}
          onKeyPress={handleInputs}
          className="search-input"
          placeholder="태그를 추가해 검색해보세요!"
        ></input>
      </div>
      <button className="search-button">검색</button>
    </Wrapper>
  );
}

export default CommunitySearch;
