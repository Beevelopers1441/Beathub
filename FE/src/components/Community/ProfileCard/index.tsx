import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// utils
import { setSimpleUsername } from 'utils/community';

// styles
import { Tooltip } from '@mui/material';
import Wrapper from './styles';

interface Props {
  name: string;
  imageUrl: string;
}

function ProfileCard({ name, imageUrl }: Props): React.ReactElement {

  return (
    <Wrapper>
      <div className="name-container">
        <Tooltip 
          title={name}
          arrow
          placement="top"
          className="name-tooltip"
        >
          <p className="name">{setSimpleUsername(name)}</p>
        </Tooltip>
      </div>
      <ProfileImage url={imageUrl} className={'user-image'} />
    </Wrapper>
  )
}

export default ProfileCard;