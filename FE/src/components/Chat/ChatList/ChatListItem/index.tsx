import React from 'react';

// component
import { ProfileImage } from 'components/atoms'

// styles
import Wrapper from './styles';

interface Props {
  item: number;
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
          url={"https://api.thecatapi.com/v1/images/search"}
        />
        <div className="name-content-container">
          <p className="name">유저이름</p>
          <p className="content">채팅 내용내용내용내용</p>
        </div>
      </div>
      <div className="chat-info-container">
        <p className="time">오후 3:57</p>
        <p className="count">{item}</p>
      </div>
    </Wrapper>
  );
};

export default ChatListItem;