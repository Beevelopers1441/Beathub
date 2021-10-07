import styled from 'styled-components'
import Background6 from 'assets/svgs/Background6.svg'

const Wrapper = styled.div`
  padding-top: 100px;
  height: window.scrollHeight;
  background-position: center center;
  background-image: url(${Background6});
  background-repeat : no-repeat;
  background-size : cover;

  min-width: 752px; 

  & .container {
    max-width: 800px;
  }

  & .post-p {
    margin-bottom: 0.5rem;
  }

  & .top-btn-container {
    margin-bottom: 2rem;
    padding-top: 1rem;

    & .btn {
      margin-right: 1rem;
      width: 10rem;
      height: 3rem;
      border: 1px solid white;
      border-radius: 3px;
      background-color: transparent;
      color: white;
      text-align: center;
      border-radius: 10px;
      backdrop-filter: blur(50px);
    }
    & .btn-active {
      margin-right: 1rem;
      width: 10rem;
      height: 3rem;
      border: 1px solid ${({ theme }) => theme.colors.white };
      border-radius: 3px;
      background-image: ${({ theme }) => theme.colors.pinkDarkGreen };
      color: white;
      text-align: center;
      border-radius: 10px;
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
      backdrop-filter: blur(50px);
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba(255, 255, 255, 0.7);
        opacity: 1; /* Firefox */
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
      }
    }
    & .post-textarea {
      min-height: 300px;
      resize: none;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba(255, 255, 255, 0.7);
        opacity: 1; /* Firefox */
        
      }
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
      backdrop-filter: blur(50px);
      border-radius: 10px;
    }
    & .btn {
      margin-left: 1rem;
      margin-bottom: 1rem;
      width: 7rem;
      height: 2.5rem;
      border: 1px solid ${({ theme }) => theme.colors.white };
      border-radius: 3px;
      background-image: ${({ theme }) => theme.colors.pinkDarkGreen };
      color: white;
      text-align: center;
      border-radius: 10px;
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