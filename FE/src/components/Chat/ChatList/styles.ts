import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 6rem;
  width: 300px;
  height: 450px;
  background-color: white;
  border-radius: 18px;
  cursor: default;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  color: #0B101F;

  & .cancel-container {
    display: flex;
    justify-content: end;

    & .cancel-icon {
      margin: 0.5rem 0.5rem 0 0;
      color: ${({ theme }) => theme.colors.darkBlue };
      cursor: pointer;
      font-size: 1rem;
    }
  }

  & .container {
    padding: 0.5rem 1rem;
  }

  & .search-container {
    display: flex;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #FAFAFA;
    border-radius: 20px;

    & .search-icon {
      font-size: 1rem;
      margin-right: 0.3rem;
    }
    & .search-input {
      width: 100%;
      height: auto;
      line-height: normal;
      background-color: transparent;
      color: #0B101F;
      border: none;
      outline-style: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
  & .user-image {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;