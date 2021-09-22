import React, { useState, useEffect } from 'react';

// component
import ChatItem from './ChatItem';

// styles
import { Cancel, Search } from '@mui/icons-material';
import Wrapper from './styles';

//tmp
const tmpList = [0, 1, 2]

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatList({ isOpen, setIsOpen }: Props): React.ReactElement {
  const [chatList, setChatList] = useState<number[]>([]);

  useEffect(() => {
    setChatList(tmpList);
  }, [])

  const handleOpen = () => {
    setIsOpen(false);
  }

  return (
    <>
      { isOpen ? (
        <Wrapper>
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
              {chatList.map(item => {
                return <ChatItem item={item} />
              })}
            </div>
          </div>
        </Wrapper>
      ) : (
        null
      )}
    </>
  );
};

export default ChatList;
