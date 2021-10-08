import React, { FC } from 'react';
import { NaverAuthBtn } from './NaverAuthBtn/index';
import { GoogleAuthBtn } from './GoogleAuthBtn/index';


const SocialAuth: FC = () => {
  return (
    <>
    {/* <NaverAuthBtn></NaverAuthBtn> */}
    <GoogleAuthBtn></GoogleAuthBtn>
    </>
  );
};

export default SocialAuth;
