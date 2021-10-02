import React from 'react';

import Wrapper from './styles';

interface Props {
  url: string;
  handleImgError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  className?: string;
}

function ProfileImage({ url, handleImgError, className }: Props): React.ReactElement {
  return (
    <Wrapper>
      <img
        src={url}
        alt="img"
        className={className}
        onError={handleImgError}
      />
    </Wrapper>

  )
}

export default ProfileImage;