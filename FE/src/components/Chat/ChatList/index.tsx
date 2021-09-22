import React from 'react';

// styles
import Wrapper from './styles';

interface Props {
  isOpen: boolean;
}

function ChatList({ isOpen }: Props): React.ReactElement {
  return (
    <>
      { isOpen ? (
        <Wrapper>
          
        </Wrapper>
      ) : (
        null
      )}
    </>
  );
};

export default ChatList;
