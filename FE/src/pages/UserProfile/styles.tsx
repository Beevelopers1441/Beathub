import styled from 'styled-components'
import Background3 from 'assets/svgs/Background3.svg'

const Wrapper = styled.div`
  padding-top: 100px;
  height: window.scrollHeight;
  background-position: center center;
  background-image: url(${Background3});
  background-repeat : no-repeat;
  background-size : cover;

  & .user-profile-container {
    min-width: 1140px;
    display: flex;
    align-items: center;
    height: window.scrollHeight;

    & .container {
      height: window.scrollHeight;
      margin: 0 0.5rem;
      padding: 1rem;
      border-radius: 10px;
      backdrop-filter: blur(50px);
    }
  }
`

export default Wrapper