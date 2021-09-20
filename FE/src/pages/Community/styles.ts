import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;

  & .community-container {
    display: flex;

    & .leftbar {
      cursor: pointer;
    }
  }

  /* LinkTab */
  & .linktab-container {
    display: flex;
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