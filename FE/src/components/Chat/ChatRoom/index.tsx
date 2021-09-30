import React, { useState, useEffect, useRef } from 'react';

// firebase
// import 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getFirestore, collection, getDocs, addDoc, setDoc } from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db, auth } from 'utils/Firebase/firebaseConfig';

// component
import Messages from './Messages';

// types
import { IBasicUser, IMessage } from 'types';

// utils
import { getCurrTime } from 'utils/time';

// styles
import { ArrowBackIosNew } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  setIsChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}



function ChatRoom({ setIsChatRoom }: Props): React.ReactElement {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const chatInputRef: any = useRef();
  // 1.사용자 회원가입 시 -> email(id/pw), id(pk), name, imageUrl
  // room_number = '1,2'
  // room_number = '1,3' >> 
  
  // 2. write
  // messages: each message[userInfo obj(id, name, imageUrl), text]
  useEffect(() => {
    const _db = db.collection("Rooms");
    const docRef = _db.doc('1,2');
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
  }, []);

  // messages
  useEffect(() => {
    console.log(messages)
  }, [messages])

  const handleInput = (e: any) => {
    if (e.key === 'Enter') {
      const newText = chatInputRef?.current.value.trim();
      const userInfo: IBasicUser = {
        id: 1,  // need to change
        imageUrl: 'https://cdn2.thecatapi.com/images/Zi4jfH3c6.jpg',
        name: '전선규',
      }
      const createdAt = getCurrTime();
      const newMessage = {
        userInfo,
        text: newText,
        createdAt,
      }
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      chatInputRef.current.value = '';

      // message 형싱게 맞추어서 firebase firestore 저장
      const messageRef = db.collection('Rooms').doc('1,2');
      const setFirebaseMessage = messageRef.update({
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
      })
        .then(() => {
          console.log('success to save in firebase')
        })
        .catch(() => {
          console.log('fail to save')
        })
    };
  }

  const handleSendBtn = () => {
    const _db = db.collection("Rooms");
    const docRef = _db.doc('1,2');
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
        <ArrowBackIosNew onClick={() => setIsChatRoom(false)} className="back-icon" />
        <p className="user-name">한상진</p>
      </div>
      <div className="content-container">
        <Messages messages={messages} />
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