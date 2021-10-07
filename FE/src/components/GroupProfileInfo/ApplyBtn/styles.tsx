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

  & .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 101;
  }
  & .modal {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    text-align: center;
    & p {
      margin-bottom: 0.5rem;
      color: #444;
      font-weight: bold;
    }
  }
  & .button-container {
    display: flex;
    justify-content: center;
    & button {
      font-weight: bold;
      margin: 0 1rem 0 1rem;
    }
  }

  & .instrument-list {
    margin: 2rem 0;
    color: #444;
    font-weight: bold;
  }
`

export default Wrapper