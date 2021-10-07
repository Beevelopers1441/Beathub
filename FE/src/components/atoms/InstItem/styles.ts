import styled from 'styled-components'

const Wrapper = styled.span`

  & .instrument-chip {
    vertical-align: middle;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }

`;

export default Wrapper;