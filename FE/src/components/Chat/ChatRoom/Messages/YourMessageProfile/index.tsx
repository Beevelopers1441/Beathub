import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

interface Props {
  
}

function YourMessageProfile(props: Props): React.ReactElement {
  return (
    <Wrapper>
      <ProfileImage url={'https://cdn2.thecatapi.com/images/Zi4jfH3c6.jpg'} />
      <div>
        <p className="user-name">한상진</p>
      </div>
    </Wrapper>
  );
};

export default YourMessageProfile;