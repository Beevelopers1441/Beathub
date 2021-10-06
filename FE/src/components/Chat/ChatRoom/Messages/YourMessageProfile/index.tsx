import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

interface Props {
  imageUrl: string;
  username: string;
}

function YourMessageProfile({ imageUrl, username }: Props): React.ReactElement {
  return (
    <Wrapper>
      <ProfileImage url={imageUrl} className={'user-image'} />
      <div>
        <p className="user-name">{ username }</p>
      </div>
    </Wrapper>
  );
};

export default YourMessageProfile;