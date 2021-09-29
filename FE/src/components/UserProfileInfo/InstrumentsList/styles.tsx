import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;

  & .instruments-letter {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  & .instruments-subwrapper {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }
`

export default Wrapper