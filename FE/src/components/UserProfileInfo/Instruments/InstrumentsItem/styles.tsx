import styled from 'styled-components'

const Wrapper = styled.div`
    width: 95.24px;
    height: 28px;
    left: 136px;
    top: 663px;

  & .item-wrapper{
    height: 28px;
    width: 100%;
    left: 0%;
    right: 0%;
    top: calc(50% - 28px/2);

    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }
`

export default Wrapper