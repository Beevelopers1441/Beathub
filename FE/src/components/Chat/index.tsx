import React from 'react';

// components
import ChatBtn from './ChatBtn';

// styles
import styled from 'styled-components';

interface Props {

}

const Wrapper = styled.button`

`;

function ChatWrapper(props: Props): React.ReactElement {
  return (
    <Wrapper>
      <ChatBtn />
    </Wrapper>
  );
};

export default ChatWrapper;