import React, { useState } from 'react';

// components
import ChatBtn from './ChatBtn';
import ChatList from './ChatList';
import FirebaseAuth from './FirebaseAuth';

// styles
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

function Chat(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      { isOpen ? (
        <FirebaseAuth />
      ) : ( null )}
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
