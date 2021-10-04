import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import ChatBtn from './ChatBtn';
import ChatList from './ChatList';
import FirebaseAuth from './FirebaseAuth';
import { initFirebase } from 'utils/Firebase/firebaseConfig';

// styles
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

function Chat(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoggedIn } = useSelector((state: any) => state.user);

  // constructor
  useEffect(() => {
    initFirebase();
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      { isLoggedIn ? (
        <>
          { isOpen ? (
            <FirebaseAuth />
          ) : (
            <></>
          )}
          <ChatList 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
          />
          <div onClick={handleOpen}>
            <ChatBtn />
          </div>
        </>
      ) : (
        null
      )}
    </Wrapper>
  );
}

export default Chat;
