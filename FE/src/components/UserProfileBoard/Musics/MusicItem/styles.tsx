import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1rem;
  height: 100px;
  width: 95%;
  border: 1px solid white;
  border-radius: 10px;
  position: relative;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.15);

    .play-svg {
      opacity: 1;
    }
  }

  & .title {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 20px;
    font-weight: bold;
  }

  & .intro {
    position: absolute;
    left: 1.2rem;
    top: 3rem;
  }

  & .contributors {
    position: absolute;
    top: 1.2rem;
    right: 1rem;
  }


  & .play-svg {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
  }
`

export default Wrapper