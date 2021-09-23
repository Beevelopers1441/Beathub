import React from 'react';

import TagItem from './TagItem';

import Wrapper from './styles';

interface Props {
  tags: string[];
}

function TagListReadOnly({ tags }: Props): React.ReactElement {

  return (
    <Wrapper>
      {tags.map(tag => {
        return <TagItem tag={tag} key={tag}/>;
      })}
    </Wrapper>
  );
}

export default TagListReadOnly;
