import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;

  & .members-letter {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }

  & .members-divider {
    margin-bottom: 1rem;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.2;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  
  & .members-subwrapper {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }
`

export default Wrapper