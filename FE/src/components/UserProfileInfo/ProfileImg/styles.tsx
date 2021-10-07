import styled from 'styled-components'

const Wrapper = styled.div`

  text-align: center;

  & .user-image {
    display: inline-block;
    width: 20vh;
    height: 20vh;
    max-width: 100%;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`

export default Wrapper