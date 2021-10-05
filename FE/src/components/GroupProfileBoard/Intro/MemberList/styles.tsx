import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 2rem;

  & .title {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }

  & .members-wrapper {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }
`

export default Wrapper