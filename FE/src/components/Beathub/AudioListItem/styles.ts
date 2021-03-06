import styled from 'styled-components';

const Wrapper = styled.div`
  // border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white };
  border-radius: 10px;
  // border-color: ${({ theme }) => theme.colors.white };
  backdrop-filter: blur(50px);

  & .instrument-chip {
    margin-bottom: 0.3rem;
    background-color:${({ theme }) => theme.colors.black };
    border-color:${({ theme }) => theme.colors.white };
    color: ${({ theme }) => theme.colors.white };
  }

  margin: 1rem;
  border: 1px solid white;
  border-radius: 10px;

  & .first-row {
    display: flex;
    margin: 1rem 1rem 0 1rem;
    position: relative;

    & .instrument {
      position: absolute;
      top: -0.3rem;
    }

    & .track-title {
      position: absolute;
      left: 6rem;
    }

    & .nickname {
      position: absolute;
      right: 1rem;
    }
  }

  & .second-row {
    text-align: center;

    & .musicwave {
      
    }
  }

  & .third-row {
    display: flex;
    margin: 0 1rem 1rem 1rem;
    position: relative;

    & .btns {
      display: flex;

      & .play-btn {
        width: 16px;
        height: 16px;
        :hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }

      & .btn-stop {
        margin-left: 1rem;
      }
    }

    & .add-btn {
      position: absolute;
      right: 1rem;
      bottom: -0.3rem;
      width: 50px;
      height: 20px;
      border-radius: 10px;
      border: 1px solid #FFFFFF;
      padding: 0.25rem;

      & .add-btn-letter {
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-size: 12px;
        text-align: center;
        color: #ABB0B5;
        :hover {
          color: #FFFFFF;
        }
      }
    }
  }
`;

export default Wrapper;