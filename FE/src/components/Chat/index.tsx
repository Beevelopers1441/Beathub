import React, { useState } from 'react';

// components
import ChatBtn from './ChatBtn';
import ChatList from './ChatList';

// styles
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
  display: flex;
`;

function Chat(props: Props): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div onClick={handleOpen}>
        <ChatBtn />
      </div>
      <ChatList 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
      />
    </Wrapper>
  );
}

export default Chat;
