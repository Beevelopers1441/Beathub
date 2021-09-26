import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;

  & .input-container {
    margin-bottom: 1rem;

    & .post-p {
      margin-bottom: 0.5rem;
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
    }

    & .post-textarea {
      min-height: 150px;
      resize: none;
    }

    & .add-instrument-wrapper {
      display: flex;
      align-items: center;

      & .add-instrument-icon {
        margin-left: 0.5rem;
        width: 16px;
        opacity: 0.6;

        :hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }
`

export default Wrapper