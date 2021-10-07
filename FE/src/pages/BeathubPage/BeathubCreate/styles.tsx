import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  min-width: 752px;

  & .super-container {
    max-width: 800px;
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