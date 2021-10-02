import React from 'react';

// component
import { ProfileImage } from 'components/atoms'

// types
import { IChatItem, IBasicUser } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  item: IChatItem;
  setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrYou: React.Dispatch<React.SetStateAction<IBasicUser | null>>;
}

function ChatListItem({ item, setIsChatRoom, setCurrYou }: Props): React.ReactElement {

  const handleChatRoom = () => {
    const newYou = { ...item.userInfo };
    setCurrYou(newYou);
    setIsChatRoom(true);
  };

  return (
    <Wrapper onClick={handleChatRoom}>
      <div className="user-container">
        <ProfileImage
          url={item.userInfo.imageUrl}
          className={'user-image'}
        />
        <div className="name-content-container">
          <p className="name">{item.userInfo.name}</p>
          <p className="content">{item.lastMessage}</p>
        </div>
      </div>
      <div className="chat-info-container">
        <p className="time">오후 3:57</p>
        {/* <p className="count">7</p> */}
      </div>
    </Wrapper>
  );
};

export default ChatListItem;