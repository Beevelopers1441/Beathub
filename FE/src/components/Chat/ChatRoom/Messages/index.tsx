import React from 'react';

// component
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import YourMessageProfile from './YourMessageProfile';

// styles
import Wrapper from './styles';

interface Props {
  
}

function Messages(props: Props): React.ReactElement {
  return (
    <Wrapper>
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <MyMessage />
      <YourMessageProfile />
      <YourMessage />
      <YourMessage />
      
    </Wrapper>
  );
};

export default Messages;