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
      <ProfileImage url={'https://api.thecatapi.com/v1/images/search'} />
      <div>
        <p className="user-name">한상진</p>
      </div>
    </Wrapper>
  );
};

export default YourMessageProfile;