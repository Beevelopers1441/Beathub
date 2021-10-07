import styled from 'styled-components';

const Wrapper = styled.div`
padding: 0 1rem;
position: relative;
height: 100%;

& .flex-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

& .flex-column-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

& .visualizer-info-container {
  padding-top: 1rem;
  position: absolute;
}

& .visualizer-wave-container {
  position: absolute;
  bottom: 1rem;
  padding: 0.5rem 1.3rem;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  max-width: 48vw;

  & .wave-btn {
    margin: 0.2rem;
    border-radius: 10px;
    border: 0px solid ${({ theme }) => theme.colors.purple };
    color: ${({ theme }) => theme.colors.white };
    background-color: rgba(255,255,255,0.15);
    font-size: 0.1rem;
    text-align: center;
  }
}

.canvas-wrapper {
  height: window.innerHeight*0.5;
}

& .top-container {
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
padding-right: 10rem;

& .title-container {
display: flex;
align-items: center;
  & .title {
    padding-right: 1.5rem;
  }
}

& .wave-picker {
  width: 276px;
  background: rgb(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.25);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  padding: 15px 9px 9px 15px;
  bottom: 100px;
  left: 350px;
  padding-top: 1rem;
  position: absolute;

}
`;

export default Wrapper;