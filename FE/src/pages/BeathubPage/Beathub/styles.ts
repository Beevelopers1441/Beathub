import styled from 'styled-components'
import Background5 from 'assets/svgs/Background5.svg'

const Wrapper = styled.div`
<<<<<<< HEAD
  margin-top: 6vh;
=======
  margin-top: 70px;
  min-width: 752px;

>>>>>>> 28d48c9739b9bfeb8f25b082a212f9ad43772d55
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
    padding: 0 2rem 0 0;
    // min-width: 1140px;
  }

  & .beathub-container {
    border: 1px solid;
    display: flex;
    padding: 1rem 3rem;
    min-width: 1140px;
    height: 80vh;
  }

`

export default Wrapper