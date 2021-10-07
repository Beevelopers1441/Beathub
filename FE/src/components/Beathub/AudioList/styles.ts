import styled from 'styled-components';

const Wrapper = styled.div`
// padding: 1rem 1rem;
border-radius: 10px;
border-color: rgba(255, 255, 255, 0.7);

// background-color: rgba(255, 255, 255, 0.7)


  & .audios-container {
    height: 52vh;
    overflow: auto;

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
  
  & .divider {
    margin: 1rem;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.2;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
`;

export default Wrapper;
