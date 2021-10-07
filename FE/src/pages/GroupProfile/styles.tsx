import styled from 'styled-components'
import Background3 from 'assets/svgs/Background3.svg'

const Wrapper = styled.div`
  padding-top: 9vh;
  height: 100vh;
  background-position: center center;
  background-image: url(${Background3});
  background-repeat : no-repeat;
  background-size : cover;

  & .group-profile-container {
    display: flex;
    align-items: center;
    min-width: 1140px;
    height: 89vh;

    & .container {
      height: 89vh;
      margin: 0 0.5rem;
      padding: 1rem;
      border-radius: 10px;
      backdrop-filter: blur(50px);
    }
  }
`

export default Wrapper