import styled from 'styled-components';

// 기존파일 복붙. 수정 필요
const Wrapper = styled.div`
  margin-top: 100px;
  backdrop-filter: blur(5px);
  color: white;

  & .container {
    min-width: 1200px;
    display: flex;
    justify-content: center;

    & .grid-container {
      margin: 1.5rem;
      
      & .content-container {
        display: flex;
        padding: 1rem;
        min-width: 500px;
        min-height: 300px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.2); // Make sure this color has an opacity of less than 1
        backdrop-filter: blur(5px); // This be the blur
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      }
    }
  }

  & .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  & .name-tooltip {
    margin: 0.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;