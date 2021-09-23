import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 5px;

  & .music-icon {
    vertical-align: middle;
    font-size: 1.2rem;
    margin: 0 0.5rem;
  }

  & input {
    width: 100%;
    height: auto;
    line-height: normal;
    padding: 0.8em 0.5em;
    background-color: transparent;
    color: #ffffff;
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