import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// firebase
import { db } from 'utils/Firebase/firebaseConfig';

// component
import ChatRoom from '../ChatRoom'
import ChatListItem from './ChatListItem';

// types
import { IChatItem } from 'types';

// styles
import { Cancel, Search } from '@mui/icons-material';
import Wrapper from './styles';
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



function ChatList({ isOpen, setIsOpen }: Props): React.ReactElement {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [isChatRoom, setIsChatRoom] = useState<boolean>(true);
  const [currYou, setCurrYou] = useState<number>(1);
  const { userInfo } = useSelector((state: any) => state.user);

  useEffect(() => {
    console.log(db.collection('Rooms').get().then(qs => { console.log(qs) }))
    console.log(userInfo.id)
    db.collection('Rooms').where('participants', 'array-contains', userInfo.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc)
          const participants = doc.data().participants;
          const myIdx = participants.indexOf(userInfo.id);
          participants.splice(myIdx, 1);
          const you = participants.pop();

          
          const newChat = {
            userInfo: { id: 0, imageUrl: '', name: '' },
            lastMessage: ''
          }
          const messages = doc.data()?.messages;
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
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [userInfo])

  const handleOpen = () => {
    setIsOpen(false);
  }

  return (
    <>
      { isOpen ? (
        <Wrapper>
          { isChatRoom ? (
            <ChatRoom setIsChatRoom={setIsChatRoom} currYou={currYou} />
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
                  {chatList.map((item, idx) => {
                    return (
                      <ChatListItem
                        item={item}
                        setIsChatRoom={setIsChatRoom}
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
