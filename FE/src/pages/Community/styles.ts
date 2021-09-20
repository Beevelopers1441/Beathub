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
`

export default Wrapper