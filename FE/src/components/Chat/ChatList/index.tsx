import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// firebase
import { db } from 'utils/Firebase/firebaseConfig';

// component
import ChatRoom from '../ChatRoom'
import ChatListItem from './ChatListItem';

// types
import { IChatItem, IBasicUser } from 'types';

// styles
import { Cancel, Search } from '@mui/icons-material';
import Wrapper from './styles';
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



function ChatList({ isOpen, setIsOpen }: Props): React.ReactElement {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [isChatRoom, setIsChatRoom] = useState<boolean>(false);
  const [currYou, setCurrYou] = useState<IBasicUser | null>(null);
  const { userInfo } = useSelector((state: any) => state.user);

  // init chatRoomList
  useEffect(() => {
    db.collection('Rooms').where('participants', 'array-contains', userInfo.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const _docData = doc.data();
          const participants = _docData.participants;
          const myIdx = participants.indexOf(userInfo.id);
          participants.splice(myIdx, 1);
          const you = participants.pop();

          
          const newChat = {
            userInfo: { id: 0, imageUrl: '', name: '' },
            lastMessage: ''
          }
          const messages = doc.data().messages;
          if (messages) {
            for (const message of messages) {
              if (message.userInfo.id === you) {
                newChat.userInfo = message.userInfo;
                newChat.lastMessage = messages[messages.length-1].text;
                const newChatList = [...chatList, newChat];
                if (newChatList) {
                  setChatList(newChatList);
                }
                break;
              };
            };
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [userInfo])

  const handleOpen = () => {
    setIsOpen(false);
  }

  // tmp function
  const handleTest = (id: number) => {
    setIsChatRoom(true);
    setCurrYou({ 
      id, 
      imageUrl: 'https://lh3.googleusercontent.com/a/AATXAJyVl4NSWtw1lfe-f0WDqqMcLOQzbliU693lFFsn=s96-c',
      name: '테스트유저'
    });
  }

  return (
    <>
      { isOpen ? (
        <Wrapper>
          { isChatRoom ? (
            <ChatRoom 
              setIsChatRoom={setIsChatRoom}
              currYou={currYou}
              chatList={chatList}
              setChatList={setChatList} 
            />
          ) : (
            <>
              <div className="cancel-container" onClick={handleOpen}>
                <Cancel className="cancel-icon" />
              </div>
              <div className="container">
                <div className="search-container">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>
                <div>
                  <div>
                    <span onClick={() => handleTest(1)}>테스트 사용자1</span>$nbsp$nbsp<span onClick={() => handleTest(3)}>테스트사용자3</span>
                  </div>
                  {chatList.map((item, idx) => {
                    return (
                      <ChatListItem
                        item={item}
                        setIsChatRoom={setIsChatRoom}
                        setCurrYou={setCurrYou}
                        key={idx}
                      />
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </Wrapper>
      ) : (
        null
      )}
    </>
  );
};

export default ChatList;
