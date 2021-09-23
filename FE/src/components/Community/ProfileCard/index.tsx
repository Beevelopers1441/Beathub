import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

interface Props {
  name: string;
  imageUrl: string;
}

function ProfileCard({ name, imageUrl }: Props): React.ReactElement {

  return (
    <Wrapper>
      <div className="name-container">
        <p className="name">{name}</p>
      </div>
      <ProfileImage url={imageUrl} />
    </Wrapper>
  )
}

export default ProfileCard;