import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

// component
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import YourMessageProfile from './YourMessageProfile';

// types
import { IMessage, IBasicUser } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  messages: IMessage[];
  currYou: IBasicUser | null;
}

function Messages({ messages, currYou }: Props): React.ReactElement {
  const { userInfo } = useSelector((state: any) => state.user);
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
      {messages.map((message, idx) => {
        return (
          message.userInfo.id === userInfo.id ? (
            <MyMessage text={message.text} key={`myMsg-${idx}`} />
          ) : (
            idx !== 0 && messages[idx-1].userInfo.id === currYou?.id ? (
              <YourMessage text={message.text} key={`yourMsgFirst-${idx}`} />
            ) : (
              <>
                <YourMessageProfile 
                  userId={message.userInfo.id}
                  imageUrl={message.userInfo.imageUrl}
                  username={message.userInfo.name}
                  key={`yourProfile-${idx}`}
                />
                <YourMessage text={message.text} key={`yourMsg-${idx}`} />
              </>
            )
          )
        )
      })}
      
      <div ref={bottomRef} />
    </Wrapper>
  );
};

export default Messages;