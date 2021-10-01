import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  & .user-image {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-right: 0.4rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;

interface Props {
  url: string;
}

function ProfileImage({ url }: Props): React.ReactElement {
  return (
    <Wrapper>
      <img
        src={url}
        alt="img"
        className="user-image"
      />
    </Wrapper>

  )
}

export default ProfileImage;