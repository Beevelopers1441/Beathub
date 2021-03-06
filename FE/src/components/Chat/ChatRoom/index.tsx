import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeChatRoomAction } from 'modules/chat/actions';

// firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from 'utils/Firebase/firebaseConfig';

// component
import Messages from './Messages';

// types
import { IBasicUser, IMessage, IChatItem } from 'types';

// styles
import { ArrowBackIosNew } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  chatList: IChatItem[];
  setChatList: React.Dispatch<React.SetStateAction<IChatItem[]>>;
  roomNumbers: Set<string>;
  setRoomNumbers: React.Dispatch<React.SetStateAction<Set<string>>>;
}



function ChatRoom({ chatList, setChatList, roomNumbers, setRoomNumbers }: Props): React.ReactElement {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currDoc, setCurrDoc] = useState('');
  const { userInfo } = useSelector((state: any) => state.user);
  const chat = useSelector((state: any) => state.chat);

  const dispatch = useDispatch();
  const chatInputRef: any = useRef();

  // constructor, init participants
  useEffect(() => {
    return () => {
      dispatch(closeChatRoomAction());
    }
  }, [dispatch]);
  
  // get Doc ID && init participants
  useEffect(() => {
    if (!chat.countpartUser) return

    // user sort
    let userDocList = [chat.countpartUser.id, userInfo.id];
    userDocList.sort((a, b) => a - b);
    const userDoc = userDocList.join(',');
    setCurrDoc(userDoc);

    const messageRef = db.collection('Rooms');
    messageRef.doc(userDoc).set({
      participants: firebase.firestore.FieldValue.arrayUnion(userInfo.id),
    }, { merge: true });
    messageRef.doc(userDoc).set({
      participants: firebase.firestore.FieldValue.arrayUnion(chat.countpartUser.id),
    }, { merge: true });

  }, [chat.countpartUser, userInfo.id]);

  // init messages
  useEffect(() => {
    if (!currDoc || !chat.countpartUser) return

    // set message
    const _db = db.collection('Rooms');
    const docRef = _db.doc(currDoc);
    docRef.onSnapshot((doc) => {
      const docDatas = doc.data();
      if (docDatas && docDatas.messages) {
        const newMessages = JSON.parse(JSON.stringify(docDatas.messages));
        setMessages([...newMessages]);

        // ??? ??????????????? chatList??? ??????
        const rn = [chat.countpartUser.id, userInfo.id];
        rn.sort((a, b) => a-b);
        const roomNumber = rn.join(',')

        if (newMessages.length === 1 && !roomNumbers.has(roomNumber)) {
          const newRoomNumbers = new Set([...Array.from(roomNumbers), roomNumber]);
          setRoomNumbers(newRoomNumbers);

          if (newMessages[0].userInfo.id === userInfo.id && chat.countpartUser) {  // ?????? ?????? ?????????
            const newChatItem: IChatItem = {
              userInfo: { ...chat.countpartUser },
              lastMessage: newMessages[0].text,
              lastCreateTime: newMessages[0].createdAt,
            };
            const newChatList = [...chatList, newChatItem];
            setChatList(newChatList);
          } else {  // ???????????? ????????? ????????? ??? ?????????
            const newChatItem: IChatItem = {
              userInfo: { ...newMessages[0].userInfo },
              lastMessage: newMessages[0].text,
              lastCreateTime: newMessages[0].createdAt,
            };
            const newChatList = [...chatList, newChatItem];
            setChatList(newChatList);
          };
        }
      }
    });
  }, [currDoc, chat.countpartUser]);

  // set message to firebase=
  const handleInput = (e: any) => {
    if (e.key === 'Enter') {
      const newText = chatInputRef?.current.value.trim();
      const myUserInfo: IBasicUser = {
        id: userInfo.id,
        imageUrl: userInfo.imageUrl,
        name: userInfo.name,
      }
      const createdAt = new Date().toJSON();
      const newMessage = {
        userInfo: myUserInfo,
        text: newText,
        createdAt,
      }
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      chatInputRef.current.value = '';

      // message ????????? ???????????? firebase firestore ??????
      const messageRef = db.collection('Rooms');
      messageRef.doc(currDoc).set({
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
        participants: firebase.firestore.FieldValue.arrayUnion(userInfo.id),
      }, { merge: true })
        .then(() => {
          console.log('success to save in firebase')
        })
        .catch(() => {
          console.log('fail to save')
        })
    };
  }

  // click send button
  const handleSendBtn = () => {
    const _db = db.collection("Rooms");
    const docRef = _db.doc(currDoc);  // need to change
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  return (
    <Wrapper>
      <div className="header-container">
        <ArrowBackIosNew onClick={() => dispatch(closeChatRoomAction())} className="back-icon" />
        <p className="user-name">{chat.countpartUser?.name}</p>
      </div>
      <div className="content-container">
        <Messages messages={messages} currYou={chat.countpartUser} />
      </div>
      <div className="input-container">
        <input 
          type="text"
          ref={chatInputRef}
          onKeyPress={handleInput} 
        />
        <svg onClick={handleSendBtn} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99433 15.4454C9.41088 15.8402 10.0953 15.6809 10.2948 15.1427L15.2286 1.83077C15.4729 1.17138 14.8088 0.540142 14.1627 0.817701L1.11842 6.42113C0.591112 6.64765 0.466794 7.3393 0.882214 7.73526L3.33003 10.0684C3.62058 10.3454 4.07138 10.3641 4.38393 10.1123L8.07844 7.13537C8.80563 6.54943 9.77627 7.47197 9.22801 8.22797L6.44255 12.0689C6.20689 12.3938 6.24852 12.8431 6.53986 13.1192L8.99433 15.4454Z" fill="#212C4F"/>
        </svg>
      </div>
    </Wrapper>
  );
};

export default ChatRoom;