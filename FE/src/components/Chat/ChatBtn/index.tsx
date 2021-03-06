import React from 'react';

// styles
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
  z-index: 101;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  cursor: pointer;
`;

function ChatBtn(props: Props): React.ReactElement {
  return (
    <Wrapper>
      <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='-9.91%' y1='19.43%' x2='109.91%' y2='80.57%'>
        <stop stopColor='#7B42F6'/>
        <stop offset='1' stopColor='#B01EFF'/>
        </linearGradient>
      </defs>
        <g filter="url(#filter0_d)">
        <path d="M8.03339 44.8235C2.7574 38.5677 1 33.7324 1 26.9695C1 11.5501 13.0178 0.999997 27.5105 1C39.9542 1 52.9389 10.7385 52.9389 26.9695C52.9389 43.2004 39.4132 52.9389 27.4901 52.9499C23.4528 52.9499 17.5014 51.8569 14.5054 49.7037L6.95133 53.7505C5.99201 54.1492 5.592 54.1945 5.86927 52.9389L8.03339 44.8235Z" fill="url(#g1)"/>
        <path d="M8.03339 44.8235C2.7574 38.5677 1 33.7324 1 26.9695C1 11.5501 13.0178 0.999997 27.5105 1C39.9542 1 52.9389 10.7385 52.9389 26.9695C52.9389 43.2004 39.4132 52.9389 27.4901 52.9499C23.4528 52.9499 17.5014 51.8569 14.5054 49.7037L6.95133 53.7505C5.99201 54.1492 5.592 54.1945 5.86927 52.9389L8.03339 44.8235Z" stroke="white" strokeWidth="2"/>
        </g>
        <circle cx="16.4814" cy="27.3024" r="2.49706" fill="white"/>
        <circle cx="37.457" cy="27.3024" r="2.49706" fill="white"/>
        <circle cx="27.4697" cy="27.3024" r="2.49706" fill="white"/>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="57.9389" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
      </svg>
    </Wrapper>
  );
}

export default ChatBtn;
