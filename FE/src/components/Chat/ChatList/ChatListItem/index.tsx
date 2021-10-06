import React from 'react';
import { useDispatch } from 'react-redux';

// component
import { ProfileImage } from 'components/atoms'

// utils
import { setKorTimeFormat } from 'utils/time';
import { openChatRoomAction, setCountpartUserAction } from 'modules/chat/actions';

// types
import { IChatItem } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  item: IChatItem;
}

function ChatListItem({ item }: Props): React.ReactElement {
  const dispatch = useDispatch();

  const handleChatRoom = () => {
    const newYou = { ...item.userInfo };
    dispatch(setCountpartUserAction({ userInfo: newYou }));
    dispatch(openChatRoomAction());
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
        <p className="time">{setKorTimeFormat(item.lastCreateTime)}</p>
        {/* <p className="count">7</p> */}
      </div>
    </Wrapper>
  );
};

export default ChatListItem;