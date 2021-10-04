import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAction } from 'modules/chat/actions';

// firebase
import { db } from 'utils/Firebase/firebaseConfig';

// apis
import { getUserProfile } from 'lib/api/userProfile';

// component
import ChatRoom from '../ChatRoom'
import ChatListItem from './ChatListItem';

// types
import { IChatItem, IBasicUser } from 'types';

// styles
import { Cancel, Search } from '@mui/icons-material';
import Wrapper from './styles';

function ChatList(): React.ReactElement {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [roomNumbers, setRoomNumbers] = useState<Set<string>>(new Set([]));
  const [isChatRoom, setIsChatRoom] = useState<boolean>(false);
  const [currYou, setCurrYou] = useState<IBasicUser | null>(null);
  const { userInfo } = useSelector((state: any) => state.user);
  const chat = useSelector((state: any) => state.chat);
  
  const dispatch = useDispatch();

  // init chatRoomList
  useEffect(() => {
    db.collection('Rooms').where('participants', 'array-contains', userInfo.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const _docData = doc.data();
          const participants = _docData.participants;
          participants.sort((a: number, b: number)=> a - b)
          const roomNumber: string = participants.join(',');

          if (!roomNumbers.has(roomNumber)) {
            const newRoomNumbers = new Set([...Array.from(roomNumbers), roomNumber]);
            setRoomNumbers(newRoomNumbers);

            const myIdx = participants.indexOf(userInfo.id);
            participants.splice(myIdx, 1);
            const you = participants.pop();
            
            const newChat = {
              userInfo: { id: 0, imageUrl: '', name: '' },
              lastMessage: ''
            }
            const messages = _docData.messages;
            if (messages) {
              let _flag = false;
              for (const message of messages) {
                if (message.userInfo.id === you) {  // 상대방이 남긴 메시지가 있으면
                  newChat.userInfo = message.userInfo;
                  newChat.lastMessage = messages[messages.length-1].text;
                  const newChatList = [...chatList, newChat];
                  if (newChatList) {
                    setChatList(newChatList);
                  };
                  _flag = true;
                  break;
                };

              if (!_flag) {  // 나만 메시지를 남겼으면
                getUserProfile(you)
                  .then((res) => {
                    const y = res.data;
                    const youInfo = {
                      id: y.id,
                      imageUrl: y.imageUrl,
                      name: y.name
                    };
                    newChat.userInfo = youInfo;
                    newChat.lastMessage = messages[messages.length-1].text;
                    const newChatList = [...chatList, newChat];
                    if (newChatList) {
                      setChatList(newChatList);
                    };
                  });
              };
              };
            };
          };
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [userInfo])

  const handleOpen = () => {
    dispatch(openAction());
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
      { chat.isOpen ? (
        <Wrapper>
          { isChatRoom ? (
            <ChatRoom 
              setIsChatRoom={setIsChatRoom}
              currYou={currYou}
              chatList={chatList}
              setChatList={setChatList}
              roomNumbers={roomNumbers}
              setRoomNumbers={setRoomNumbers}
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
