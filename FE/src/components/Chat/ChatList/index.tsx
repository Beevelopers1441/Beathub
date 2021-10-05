import React, { useState, useEffect, useRef } from 'react';
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
import { IChatItem } from 'types';

// styles
import { Cancel, Search } from '@mui/icons-material';
import Wrapper from './styles';

function ChatList(): React.ReactElement {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [currChatList, setCurrChatList] = useState<IChatItem[]>([]);
  const [currSearchInput, setCurrSearchInput] = useState<string>('');
  const [roomNumbers, setRoomNumbers] = useState<Set<string>>(new Set([]));

  const { userInfo } = useSelector((state: any) => state.user);
  const chat = useSelector((state: any) => state.chat);
  const searchRef: any = useRef();
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
              lastMessage: '',
              lastCreateTime: '',
            }
            const messages = _docData.messages;
            if (messages) {
              let _flag = false;
              for (const message of messages) {
                if (message.userInfo.id === you) {  // 상대방이 남긴 메시지가 있으면
                  newChat.userInfo = message.userInfo;
                  newChat.lastMessage = messages[messages.length-1].text;
                  newChat.lastCreateTime = messages[messages.length-1].createdAt;
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
                    newChat.lastCreateTime = messages[messages.length-1].createdAt;
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

  // sort chatList
  useEffect(() => {
    const newChatList = [...chatList];
    newChatList.sort((a, b) => (+(new Date(b.lastCreateTime)) - +(new Date(a.lastCreateTime))));  // 최신 메시지 순 정렬

    // init currChatList and init search input
    setCurrChatList([...chatList]);
    searchRef.current.value = '';
  }, [chatList])

  const handleOpen = () => {
    dispatch(openAction());
  }

  // search input
  const handleSearchInput = (e: any) => {
    if (e.key === 'Enter') {
      const newSearchInput = searchRef?.current.value.trim().toLowerCase();
      console.log(newSearchInput)
      if (!newSearchInput) {  // input 값이 없으면
        setCurrChatList([...chatList]);
      } else {
        let newCurrChatList = [...chatList];
        newCurrChatList = newCurrChatList.filter(chatList => chatList.userInfo.name.toLowerCase().indexOf(newSearchInput) !== -1);
        setCurrChatList(newCurrChatList);
      };
    };
  };

  return (
    <>
      { chat.isOpen ? (
        <Wrapper>
          { chat.isChatRoom ? (
            <ChatRoom 
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
                    ref={searchRef}
                    onKeyPress={handleSearchInput}
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>
                <div>
                  { currChatList.map((item, idx) => {
                      return (
                        <ChatListItem
                          item={item}
                          key={`chatItem-${idx}`}
                        />
                      );
                    })
                  }
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
