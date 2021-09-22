import styled from 'styled-components'

const Wrapper = styled.div`
  /* 프로필 수정 */
  position: absolute;
  width: 320px;
  height: 40px;
  left: 136px;
  top: 747px;

  & .edit-btn {
    /* Base */
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0%;
    right: 0%;
    top: calc(50% - 40px/2);
    
    background: #D99BFF;
    border-radius: 10px;

  }
  
  & .edit-btn-letter {
    /* Edit profile */
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: calc(50% - 24px/2);

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;

    /* white */
    color: #FFFFFF;
  }
  
`

export default Wrapper