import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #212C4F;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;