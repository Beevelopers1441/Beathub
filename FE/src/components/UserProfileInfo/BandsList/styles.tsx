import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;

  & .secondary-letter {
    color: #ABB0B5;
  }

  & .bands-letter-create-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .bands-letter {
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
    }

  }

  & .bands-divider {
    margin-bottom: 1rem;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.2;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  
  & .bands-subwrapper {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25rem;
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
    padding: 40px 20px;
    background: #ffffff;
    border-radius: 10px;
    text-align: center;
    & .title {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #444;
      font-weight: bold;
    }
  }

  & .input-container {
    margin: 2rem 0 1rem 0;
  }

  & .button-container {
    display: flex;
    justify-content: center;
    
    & button {
      margin: 0.5rem;
    }
  }

  & .sub-description {
    margin: 1rem 5rem;
    max-width: 200px;
    color: #444;
    font-weight: 200;
    text-align: center;
    line-height: 1.2;
  }

  & .picker-container {
    display: flex;
    justify-content: center;
    margin: 0 0 1rem 0;
  }
`

export default Wrapper