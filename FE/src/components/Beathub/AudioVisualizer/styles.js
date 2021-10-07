import styled from 'styled-components';

const Wrapper = styled.div`
padding: 1rem 1rem;
position: relative;

& .visualizer-info-container {
  padding-top: 20px;
  position: absolute;
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
    padding-right: 0.5rem;
  }
}

`;

export default Wrapper;