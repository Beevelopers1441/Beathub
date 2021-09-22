import React, { FC } from 'react';
import { KakaoAuthBtn } from './KakaoAuthBtn/index';
import { GoogleAuthBtn } from './GoogleAuthBtn/index';


const SocialAuth: FC = () => {
  return (
    <>
    <KakaoAuthBtn></KakaoAuthBtn>
    <GoogleAuthBtn></GoogleAuthBtn>
    </>
  );
};

export default SocialAuth;
