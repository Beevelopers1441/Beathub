import styled from 'styled-components';

const Wrapper = styled.div`

  & .header-container {
    display: flex;
    align-items: center;
    padding: 1rem;

    & .back-icon {
      font-size: 1.2rem;
      margin-right: 1rem;
      cursor: pointer;
    }
    & .user-name {
      line-height: 1.1;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  & .content-container {
    height: 345px;
    background: #FAFAFA;
    overflow: auto;

  }

  & .input-container {
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;

    & input {
      width: 233px;
      height: auto;
      line-height: normal;
      padding: 0.3rem 0.5rem;
      margin-right: 1rem;
      background-color: #FAFAFA;
      color: ${({ theme }) => theme.colors.darkBlue };;
      font-family: inherit;
      border: none;
      border-radius: 12px;
      outline-style: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    & svg {
      cursor: pointer;
    }
  }
`;

export default Wrapper;