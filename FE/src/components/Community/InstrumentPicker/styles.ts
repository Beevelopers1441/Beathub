import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  min-width: 187.2px;
  // 배경이 뿌옇게 되도록 효과
  backdrop-filter: blur(50px);

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
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(255, 255, 255, 0.7);
      opacity: 1; /* Firefox */
    }
  }
`;

export default Wrapper;