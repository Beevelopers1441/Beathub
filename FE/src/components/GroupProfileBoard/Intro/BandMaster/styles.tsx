import styled from 'styled-components'

const Wrapper = styled.div`

& .intro-container {
  margin-bottom: 2rem;

  & .title {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }

  & .profile-img {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  & .img-wrapper {
    margin: 0.25rem 1rem 0 0;
    width: 100px;
    text-align: center;
  }
}
`

export default Wrapper