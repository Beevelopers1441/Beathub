import React from 'react';
import { useHistory } from 'react-router-dom';

// component
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

interface Props {
  userId: number;
  imageUrl: string;
  username: string;
}

function YourMessageProfile({ userId, imageUrl, username }: Props): React.ReactElement {
  const history = useHistory();

  const handleGoProfile = (id: number) => {
    history.push(`/profile/${id}`);
  };

  return (
    <Wrapper>
      <div onClick={() => handleGoProfile(userId)}>
        <ProfileImage url={imageUrl} className={'user-image'} />
      </div>
      <div>
        <p className="user-name">{ username }</p>
      </div>
    </Wrapper>
  );
};

export default YourMessageProfile;