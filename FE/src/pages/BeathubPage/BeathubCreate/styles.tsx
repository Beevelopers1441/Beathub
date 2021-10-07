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

  & .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & .sub-title {
    margin-top: 0.5rem;
  }
  
  & .content {
    margin-bottom: 1rem;
  }

  & .container {
    margin-bottom: 2rem;

    & h2 {
      margin-bottom: 1rem;
    }
    & p {
      font-size: 1rem;
      line-height: 1.2;
      color: #ABB0B5;
    }
  }
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

    & .bottom-btn {
      background-image: ${({ theme }) => theme.colors.blueViolet }
    }
  }
  
`

export default Wrapper;