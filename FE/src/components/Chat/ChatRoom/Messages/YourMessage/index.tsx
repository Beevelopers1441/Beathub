import React from 'react';

// styles
import Wrapper from './styles';

interface Props {
  text: string;
}

function YourMessage({ text }: Props): React.ReactElement {
  return (
    <Wrapper>
      { text }
    </Wrapper>
  );
};

export default YourMessage;