import styled from 'styled-components'

const Wrapper = styled.div`
  & .tab-container {
    display: flex;
  }

  & .tab-title {
    margin: 0 1rem 0.7rem 1rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    line-height: 33px;
    text-align: center;
    color: #ABB0B5;
  }

  & .tab-title-active {
    margin: 0 1rem 0.7rem 1rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
  }

  & .nav-divider {
    border-bottom: 0.5px solid white;
  }
`

export default Wrapper