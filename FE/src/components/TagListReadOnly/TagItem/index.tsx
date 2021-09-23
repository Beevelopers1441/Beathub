import React from 'react';

import Wrapper from './styles';

interface Props {
  tag: string;
}

function TagItem({ tag }: Props): React.ReactElement {
  return (
    <Wrapper>
      <p>{tag}</p>
    </Wrapper>
  );
}

export default TagItem;
