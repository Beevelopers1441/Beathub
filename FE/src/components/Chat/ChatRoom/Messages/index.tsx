import React, { useEffect, useRef } from 'react';

// component
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import YourMessageProfile from './YourMessageProfile';

// types
import { IMessage } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  messages: IMessage[];
}

function Messages({ messages }: Props): React.ReactElement {
  const bottomRef: any = useRef();

  // constructor
  useEffect(() => {
    scrollToBottom();
  }, [messages])

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <Wrapper>
      {messages.map(message => {
        return (
          message.userInfo.id === 1 ? (
            <MyMessage text={message.text} />
          ) : (
            <YourMessage text={message.text} />
          )
        )
      })}
      
      <div ref={bottomRef} />
    </Wrapper>
  );
};

export default Messages;