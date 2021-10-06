import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;

  & .home-container {
    display: flex;
  }

  & .main-container {
    display: flex;
    padding: 2rem;
  }

  & .sub-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2rem 0 0;
    // min-width: 1140px;
  }

  // & .sub-container {
  //   min-width: 1140px;
  // }

`

export default Wrapper