import styled from 'styled-components';

const Wrapper = styled.div`

  & .user-image {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;

export default Wrapper;