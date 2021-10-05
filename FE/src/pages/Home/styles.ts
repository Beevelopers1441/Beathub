import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;

  & .home-container {
    display: flex;

    & .leftbar {
      cursor: pointer;
    }
  }

  & .sub-container {
    min-width: 1140px;
  }

`

export default Wrapper