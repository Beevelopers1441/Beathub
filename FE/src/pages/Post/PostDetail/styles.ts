import styled from 'styled-components'
import Background6 from 'assets/svgs/Background6.svg'

const Wrapper = styled.div`
  padding-top: 10vh;
  height: 100vh;
  background-position: center center;
  background-image: url(${Background6});
  background-repeat : no-repeat;
  background-size : cover;
  display: flex;
  align-items: center;

  & .back-btn {
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 7px;
    cursor: pointer;
  }

  & .content-container {
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    backdrop-filter: blur(50px);

    & .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    & .time-like-container {
      display: flex;
      font-size: 0.8rem;
      padding-bottom: 0.2rem;
      margin-bottom: 1rem;
      border-bottom: 0.5px solid #ABB0B5;

      & .time {
        margin-right: 1rem;
        color: ${({ theme }) => theme.colors.subGrey };
      }
      & .likes-icon-inactive {
        font-size: 0.8rem;
        margin-right: 0.2rem;
        cursor: pointer;
      }
      & .likes-icon-active {
        color: ${({ theme }) => theme.colors.pink };
        font-size: 0.8rem;
        margin-right: 0.2rem;
        cursor: pointer;
      }
      & .likes {
        line-height: 1.1;
        font-size: 0.8rem;
      }
    }

    & .tag-container {
      margin-bottom: 2.5rem;
    }

    & .content {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    & .comments-container {

      & .comments-header-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        & .comments-length {
          align-self: flex-end;
        }
        & .comment-btn {
          margin-left: 1rem;
          width: 7rem;
          height: 2.2rem;
          // border: none;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          background-image: ${({ theme }) => theme.colors.violetPink };
          color: white;
          text-align: center;
        }
      }


      & .comment-input {
        width: 100%;
        min-height: 80px;
        height: auto;
        line-height: normal;
        padding: 1.2em 0.7em;
        margin-bottom: 2rem;
        background-color: white;
        color: #000000;
        border: none;
        border-radius: 5px;
        outline-style: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        resize: none;
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
      }
    }
  }

  & .right-sidebar-container {
    padding-right: 2.3rem;
    width: 252px;
    text-align: end;

    & .edit-btns-container {

      & .progress-container {
        margin-top: 1rem;
      }
      & .progress-text {
        display: inline-block;
        font-weight: 400;
        min-width: 90px;
        text-align: center;
        padding: 0.5rem 0.7rem;
        background-image: ${({ theme }) => theme.colors.blueMarine };
        border-radius: 12px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      }
      & .btn {
        width: 120px;
        margin: 1.5rem 0 0 2rem;
        border-radius: 3px;
        font-size: 1rem;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      }
    }
  }
`

export default Wrapper