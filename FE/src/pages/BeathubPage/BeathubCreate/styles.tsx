import styled from 'styled-components'
import Background5 from 'assets/svgs/Background5.svg'

const Wrapper = styled.div`
  margin-top: 6vh;
  min-width: 752px;
  height: 93vh;
  background-position: center center;
  background-image: url(${Background5});
  background-repeat : no-repeat;
  background-size : cover;

  & .super-container {
    max-width: 800px;
    padding-top: 100px
  }

  & .content {
    margin-bottom: 1rem;
  }

  & .container {
    margin-bottom: 2rem;
  
  & .post-input {
    width: 100%;
    height: auto;
    line-height: normal;
    padding: 1.2em 0.7em;
    background-color: transparent;
    color: #ffffff;
    border: 1px solid white;
    border-radius: 5px;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    backdrop-filter: blur(50px);
  }

  & .post-textarea {
    min-height: 100px;
    resize: none;
  }

  & .bottom-btn-container {
    display: flex;
    justify-content: end;
  }
`

export default Wrapper