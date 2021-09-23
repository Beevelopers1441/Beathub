import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 0.5px solid #ABB0B5;
  padding: 1.2rem 0.5rem;
  margin-bottom: 1rem;

  & .user-info-container {
    display: flex;

    & .user-image {
      display: inline-block;
      width: 60px;
      height: 60px;
      margin-right: 0.4rem;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    & .name-time-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.3rem 0;

      & .user-name {
        font-size: 1.1rem;
      }
      & .time {
        font-size: 0.8rem;
        font-weight: 200;
      }
    }
  }
`;

export default Wrapper;
