import styled from 'styled-components'

const Wrapper = styled.div`
  & .item-wrapper{
    margin: 0.25rem;
    width: 85px;
    height: 28px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    border-radius: 14px;

    :hover .overlay{
      opacity: 1;
      cursor: pointer;
    }

    & .item-letter {
      font-size: 12x;
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      line-height: 29px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }

    & .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 85px;
      height: 28px;
      opacity: 0;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: .5s ease;
      background-color: #212C4F;
      display: flex;
      align-items: center;
      justify-content: center;
    } 
  }
`

export default Wrapper