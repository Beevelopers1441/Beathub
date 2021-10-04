import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAction } from 'modules/chat/actions';

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
  const { isLoggedIn } = useSelector((state: any) => state.user);
  const chat = useSelector((state: any) => state.chat);
  const dispatch = useDispatch();

  // constructor
  useEffect(() => {
    initFirebase();
  }, []);
  
  // open chat comp
  const handleOpen = () => {
    dispatch(openAction());
  };

  return (
    <Wrapper>
      { isLoggedIn ? (
        <>
          { chat.isOpen ? (
            <ChatList />
          ) : (
            <></>
          )}
          <FirebaseAuth />
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
