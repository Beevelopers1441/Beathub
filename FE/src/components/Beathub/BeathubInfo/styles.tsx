import styled from 'styled-components';

const Wrapper = styled.div`
  & .container {

    & .title {
      margin-left: 4rem;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
    }

    & .introduction {
      margin-left: 4rem;
      margin-top: 0.5rem;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 29px;
    }

    & .button {
      margin-top: 1rem;
    }
  }
`;

export default Wrapper;