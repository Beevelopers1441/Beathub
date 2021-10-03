import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;

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
          border: none;
          border-radius: 3px;
          background-color: ${({ theme }) => theme.colors.purple };
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
      }
    }
  }

  & .right-sidebar-container {
    width: 252px;
    text-align: end;
  }
  & .delete-btn {
    width: max-content;
    margin: 2rem 0 0 2rem;
    border-radius: 12px;
    font-size: 1rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`

export default Wrapper