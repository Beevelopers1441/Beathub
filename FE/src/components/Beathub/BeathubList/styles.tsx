import styled from 'styled-components';

const Wrapper = styled.div`
  & .divider {
    margin: 1rem;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.2;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  & .audios-container {
    height: 30rem;
    overflow: auto;

    & .audios-empty {
      margin-top: 200px;
      font-size: 20px;
      color: #ABB0B5;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 6px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export default Wrapper;