import styled from 'styled-components';

const Wrapper = styled.div`
  & .container {
    padding-top: 1rem;

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

    & .button {
      margin-top: 1rem;
      background-image: ${({ theme }) => theme.colors.blueViolet };
    }
  }
`;

export default Wrapper;