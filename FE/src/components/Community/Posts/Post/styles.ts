import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  border-top: 0.5px solid #ABB0B5;
  padding: 1.5rem;
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
  }

  & .mainInfo-box {
    cursor: pointer;
  }

  & .post-mainInfo-container {
    & .title {
      color: white;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    & .content {
      color: ${({ theme }) => theme.colors.subGrey };
      font-size: 1rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }
    & .tags {
      color: ${({ theme }) => theme.colors.subGrey };
      font-size: 1rem;
      font-weight: 300;
    }
  }

  & .post-subInfo-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 100;

    & .comment {
      text-align: end;
      font-size: 0.8rem;
    }
    & .time-likes-container {
      display: flex;
      justify-content: end;

      & .time {
        font-size: 0.8rem;
        align-self: center;
        margin-right: 0.6rem;
      }
      
      & .likes-container {
        display: flex;  
        align-items: center;
        font-size: 0.8rem;
        
        & .likes-icon {
          font-size: 0.9rem;
          margin-right: 0.2rem;
        }
        & .likes-icon-active {
          color: ${({ theme }) => theme.colors.pink };
        }
      }
    }
  }

  & .user-container {
    display: flex;
    justify-content: end;

    & .name-tooltip {
      
    }
    & .user-name {
      margin: 0.2rem 0;
      height: fit-content;
      font-size: 13px;
    }
    & .user-image {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin-left: 0.4rem;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  & .post-tag {
    margin-left: 0.7rem;
  }

  & .profile-image-container {
    cursor: pointer;
  }
`

export default Wrapper