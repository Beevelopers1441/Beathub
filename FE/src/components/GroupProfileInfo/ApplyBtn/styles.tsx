import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  
  & .divider {
    margin-bottom: 1rem;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.2;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  & .apply-btn {
    height: 50px;
    width: 100%;
    background: linear-gradient(117.03deg, #7B42F6 0%, #B01EFF 100%);
    box-shadow: 0px 10px 20px rgba(123, 66, 246, 0.15);
    border-radius: 30px;
    text-align: center;
    
    & .apply-letter {
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }
`

export default Wrapper