import React from 'react';

// component
import { ProfileImage } from 'components/atoms'

// types
import { IChatItem } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  item: IChatItem;
  setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatListItem({ item, setIsChatRoom }: Props): React.ReactElement {

  const handleChatRoom = () => {
    setIsChatRoom(true);
  };

  return (
    <Wrapper onClick={handleChatRoom}>
      <div className="user-container">
        <ProfileImage
          url={"https://cdn2.thecatapi.com/images/Zi4jfH3c6.jpg"}
        />
        <div className="name-content-container">
          <p className="name">{item.userInfo.name}</p>
          <p className="content">{item.lastMessage}</p>
        </div>
      </div>
      <div className="chat-info-container">
        <p className="time">오후 3:57</p>
        <p className="count">7</p>
      </div>
    </Wrapper>
  );
};

export default ChatListItem;