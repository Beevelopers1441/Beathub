import styled from 'styled-components'

const Wrapper = styled.div`
  & .item-wrapper{
    margin: 0.25rem;
    // width: 85px;
    height: 28px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 14px;

    & .item-letter {
      margin: 0 0.25rem 0  0.25rem;
      font-size: 12x;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      line-height: 29px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`

export default Wrapper