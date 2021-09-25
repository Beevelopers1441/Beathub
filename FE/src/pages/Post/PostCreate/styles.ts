import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  min-width: 752px; 

  & .container {
    max-width: 800px;
  }

  & .post-p {
    margin-bottom: 0.5rem;
  }

  & .top-btn-container {
    margin-bottom: 2rem;

    & .btn {
      margin-right: 1rem;
      width: 10rem;
      height: 3rem;
      border: 1px solid white;
      border-radius: 3px;
      background-color: transparent;
      color: white;
      text-align: center;
    }
    & .btn-active {
      margin-right: 1rem;
      width: 10rem;
      height: 3rem;
      border: 1px solid ${({ theme }) => theme.colors.purple };
      border-radius: 3px;
      background-color: ${({ theme }) => theme.colors.purple };
      color: white;
      text-align: center;
    }
  }

  & .input-container {
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
      min-height: 300px;
      resize: none;
    }
    & .post-input-tag {
      margin-bottom: 0.3rem;
    }
  }

  & .bottom-btn-container {
    display: flex;
    justify-content: end;

    & .btn-cancel {
      margin-left: 1rem;
      width: 7rem;
      height: 2.5rem;
      border: 1px solid white;
      border-radius: 3px;
      background-color: transparent;
      color: white;
      text-align: center;
    }
    & .btn {
      margin-left: 1rem;
      margin-bottom: 1rem;
      width: 7rem;
      height: 2.5rem;
      border: 1px solid ${({ theme }) => theme.colors.purple };
      border-radius: 3px;
      background-color: ${({ theme }) => theme.colors.purple };
      color: white;
      text-align: center;
    }
  }

  & .input-tag-container > :nth-child(3) > div {
    background-color: ${({ theme }) => theme.colors.violet };
  }

  & .instrument-container input {
    padding: 1.2em 0.7em;
  }
`

export default Wrapper