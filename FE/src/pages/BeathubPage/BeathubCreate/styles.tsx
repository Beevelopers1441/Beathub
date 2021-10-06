import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;

  & .content {
    margin: 1rem;
    width: 50%;
  }

  & .container {
    margin-bottom: 2rem;
  
  & .post-input {
    width: 50%;
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
`

export default Wrapper