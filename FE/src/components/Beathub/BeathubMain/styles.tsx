import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  
  & .container{
    max-width: 100%
  }

  & .btn-container {

    & .play-btn {
      margin: 1rem;
      width: 30px;
      height: 30px;
      :hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
`;

export default Wrapper;