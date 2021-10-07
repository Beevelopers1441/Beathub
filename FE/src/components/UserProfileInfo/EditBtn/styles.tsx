import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;

  & .edit-btn {
    width: 100%;
    height: 40px;
    background: ${({ theme }) => theme.colors.violetPink };
    border-radius: 10px;
  }
  
  & .edit-btn-letter {
    /* Edit profile */
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  
`

export default Wrapper