import styled from 'styled-components'

// 기존파일 복붙. 수정 필요
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;

  & .login-container {
    // grid
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:306px;
    background-color: ${({ theme }) => theme.colors.white };
    box-shadow: 0px 15px 30px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
  }

  /* LinkTab */
  // & .linktab-container {
  //   display: flex;
  // }

  & .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25rem;
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.darkBlue };
    & .btn {
      &-naver {
        width: 18rem;
        height: 3rem;
        margin: 0.5rem 0;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: #03C75A;
        ${({ theme }) => theme.font.bold }
      }

      &-google {
        width: 18rem;
        height: 3rem;
        margin: 0.5rem 0;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.white };
        ${({ theme }) => theme.font.bold }
      }
    }
  }
`

export default Wrapper