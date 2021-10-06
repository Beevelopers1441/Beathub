import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 2rem;
  
  & .item-wrapper{
    margin: 0.25rem;
    width: 60px;
    height: 60px;

    & .item-img {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
`

export default Wrapper