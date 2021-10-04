import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem;
  border: 1px solid white;
  border-radius: 10px;

  & .first-row {
    display: flex;
    margin: 1rem 1rem 0 1rem;
    position: relative;

    & .instrument {
      
    }

    & .track-title {
      margin-left: 1rem;
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

    & .delete-btn {
      position: absolute;
      right: 1rem;
    }
  }
`;

export default Wrapper;