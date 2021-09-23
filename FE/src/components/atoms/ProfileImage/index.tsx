import React, { useState, useEffect } from 'react';

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
  // imageUrl tmp
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    const request = async () => {
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json()
      const _imageUrl = data[0].url;
      setImgUrl(_imageUrl)
    }
    request()
  }, [url])

  return (
    <Wrapper>
      <img
        src={imgUrl}
        alt="img"
        className="user-image"
      />
    </Wrapper>

  )
}

export default ProfileImage;