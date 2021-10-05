import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 2rem;

  & .item-wrapper{
    margin: 0.25rem 1rem 0 0;
    width: 100px;
    text-align: center;
  
    & .item-img {
      display: inline-block;
      margin-bottom: 0.5rem;
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