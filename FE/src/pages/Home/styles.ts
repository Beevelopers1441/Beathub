import styled from 'styled-components'
import Background4 from 'assets/svgs/Background4.svg'

const Wrapper = styled.div`
  padding-top: 100px;
  background-position: center center;
  background-image: url(${Background4});
  background-repeat: no-repeat;
  background-size: cover;

  & .blur {
    backdrop-filter: blur(50px);

  & .home-container {
    display: flex;
    justify-content: space-around;
  }

  & .main-container {
    display: flex;
    justify-content: center;
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