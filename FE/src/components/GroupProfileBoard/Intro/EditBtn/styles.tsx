import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  right: 5px;

  & .edit-btn {
    width: 60px;
    height: 30px;
    background: #D99BFF;
    border-radius: 10px;
  }

  & .cancel-btn {
    margin-left: 0.5rem;
    width: 60px;
    height: 30px;
    background: #F0F3F5;
    border-radius: 10px;
  }

  & .cancel-btn-letter {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-size: 16px;
    text-align: center;
    color: black;
  }
  
  & .edit-btn-letter {
    /* Edit profile */
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-size: 16px;
    text-align: center;
  }
  
`

export default Wrapper