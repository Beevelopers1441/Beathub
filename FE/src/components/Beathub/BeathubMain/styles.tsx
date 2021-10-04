import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

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