import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.45rem 0.7rem;
  margin: 0 0.5rem 0.5rem 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.purple };
  border-radius: 20px;

  & p {
    font-size: 1.2rem;
    align-self: center;
    margin: 0 0.3rem;
  }
  & button svg{
    vertical-align: middle;
    font-size: 1rem;
  }
`

export default Wrapper;