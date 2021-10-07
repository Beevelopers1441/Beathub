import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;

  & .user-image {
    width: 30px;
    height: 30px;
    margin-left: 0.3rem;
    cursor: pointer;
  }

  & .user-name {
    padding-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
  }

`;

export default Wrapper;