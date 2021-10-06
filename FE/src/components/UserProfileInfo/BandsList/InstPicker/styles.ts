import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #444;
  border-radius: 5px;
  min-width: 187.2px;

  & input {
    width: 100%;
    height: auto;
    line-height: normal;
    padding: 0.8em 0.5em;
    background-color: white;
    color: #444;
    font-family: inherit;
    border: none;
    border-radius: 5px;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default Wrapper;