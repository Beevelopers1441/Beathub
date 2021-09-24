import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;

  & .community-container {
    display: flex;

    & .leftbar {
      cursor: pointer;
    }
  }

  & .sub-container {
    min-width: 1140px;
  }

  /* leftbar */
  & .teamFlag {
    color: #ABB0B5;
    text-align: right;
    font-size: 1.2rem;
    margin: 0 3rem 1.3rem 0;
    cursor: pointer;
  }
  & .teamFlag-active {
    text-align: right;
    font-size: 1.2rem;
    margin: 0 3rem 1.3rem 0;
    cursor: pointer;
  }

  /* LinkTab */
  & .linktab-container {
    display: flex;
    border-bottom: 0.5px solid white;
  }

  & .create-container {
    display: flex;
    justify-content: end;
    & .create-btn {
      width: 5rem;
      height: 2rem;
      margin: 1rem 0;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.colors.violet };
      text-align: center;
      color: white;
    }
  }
`

export default Wrapper