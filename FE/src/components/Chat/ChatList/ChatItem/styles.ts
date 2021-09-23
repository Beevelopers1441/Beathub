import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 1.1rem 0.3rem 0.7rem 0.3rem;
  border-bottom: 0.2px solid #C3C3C3;

  & .user-container {
    display: flex;
    margin-right: auto;

    & .user-image {
      width: 35px;
      height: 35px;
    }
  }

  & .name-content-container {

    & .name {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
    }
    & .content {
      color: #C3C3C3;
      font-size: 0.65rem;
      font-weight: 100;
    }
  }

  & .chat-info-container {
    text-align: end;

    & .time {
      margin-bottom: 0.3rem;
      font-size: 0.7rem;
      font-weight: 300;
    }
    & .count {
      float: right;
      background-color: ${({ theme }) => theme.colors.pink };
      inline-size: fit-content;
      padding: 0.18rem 0.4rem;
      border-radius: 7px;
      color: white;
      font-size: 0.6rem;
      line-height: 1.1;
      
    }
  }

`;

export default Wrapper;