import styled from 'styled-components'

const Wrapper = styled.div`
& .item-wrapper{
  margin: 0.25rem;
  width: 60px;
  height: 60px;

  & .item-img {
    width: 100%;
    height: 100%;
  }
}
`

export default Wrapper