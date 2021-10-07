import styled from 'styled-components'
import Background2 from 'assets/svgs/Background2.svg'

// 기존파일 복붙. 수정 필요
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-position: center center;
  background-image: url(${Background2});
  background-repeat : no-repeat;
  background-size : cover;

  & .login-container {
    // grid
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:408px;
    background-color: ${({ theme }) => theme.colors.white };
    box-shadow: 0px 15px 30px rgba(255, 255, 255, 0.25);
    border-radius: 20px;

    & .btn-close {
      width: 100%;
      display: absolute;
      padding: 1rem 1rem 0rem 0rem;
      display: flex;
      justify-content: end;
    }
  }

  /* LinkTab */
  // & .linktab-container {
  //   display: flex;
  // }

  & .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 25rem;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue };

    & .img-logo {
      margin: 1rem;
      width: 150px;
    }

    & .btn {
      &-naver {
        width: 18rem;
        height: 3rem;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: #03C75A;
        color: ${({ theme }) => theme.colors.white };
        ${({ theme }) => theme.font.bold }
      }

      &-google {
        width: 18rem;
        height: 3rem;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.white };
        color: ${({ theme }) => theme.colors.black };
        ${({ theme }) => theme.font.bold }
      }
    }
  }
`

export default Wrapper