import styled from 'styled-components';

const Wrapper = styled.div`
  & .container {

    & .title {
      margin-left: 2rem;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
    }

    & .introduction {
      margin-left: 2rem;
      margin-top: 0.5rem;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 29px;
    }
  }
`;

export default Wrapper;