import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

& .intro-container {
  margin-bottom: 2rem;

  & .title {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }

  & .post-input {
    width: 75%;
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
}
`

export default Wrapper