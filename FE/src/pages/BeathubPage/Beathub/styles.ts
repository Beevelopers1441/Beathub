import styled from 'styled-components'
import Background5 from 'assets/svgs/Background5.svg'

const Wrapper = styled.div`
  margin-top: 7.5vh;
  background-position: center center;
  background-image: url(${Background5});
  background-repeat : no-repeat;
  background-size : cover;
  height: 93vh;

  & .upload-container {
    display: flex;
  }

  & .editor-container {
    // display: flex;
    height: 80px;
    padding: 0 2rem 0 0;
    // min-width: 1140px;
  }

  & .beathub-container {
    border-top: 1px solid;
    display: flex;
    padding: 1rem 3rem;
    min-width: 1140px;
    height: 80vh;
  }

`

export default Wrapper