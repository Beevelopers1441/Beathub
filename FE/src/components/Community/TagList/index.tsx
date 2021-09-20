import React from 'react';

import TagItem from './TagItem';

import Wrapper from './styles';

interface Props {
  currTags: string[];
  setCurrTags: React.SetStateAction<any>;
}

function TagList({ currTags, setCurrTags }: Props): React.ReactElement {
  const onDelete = (tag: string): void => {
    const newCurrTags = [...currTags];
    const idx = currTags.indexOf(tag);
    newCurrTags.splice(idx, 1);
    setCurrTags(newCurrTags);
  };

  return (
    <Wrapper>
      {currTags.map(tag => {
        return <TagItem tag={tag} onDelete={onDelete} key={tag}/>;
      })}
    </Wrapper>
  );
}

export default TagList;
