import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  body{
    color: #ffffff;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    // #0A1929
    background-color: #212C4F;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;