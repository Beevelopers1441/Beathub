import React, { useEffect, useRef } from 'react';

// component
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import YourMessageProfile from './YourMessageProfile';

// styles
import Wrapper from './styles';

interface Props {
  
}

function Messages(props: Props): React.ReactElement {
  const bottomRef: any = useRef();

  // constructor
  useEffect(() => {
    scrollToBottom();
  }, [])

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <Wrapper>
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <YourMessageProfile />
      <YourMessage />
      <YourMessage />
      <div ref={bottomRef} />
    </Wrapper>
  );
};

export default Messages;