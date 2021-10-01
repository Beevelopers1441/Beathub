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
    height:408px;
    background-color: ${({ theme }) => theme.colors.white };
    box-shadow: 0px 15px 30px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    text-align: center;
    
    & * {
      margin: 0.3rem 0;
    }

    & .chip-container {
      width: 100%;
      display: absolute
      margin: 1rem 2rem;
      display: flex;
      justify-content: end;

      & .chip-home {
        margin: 1rem 2rem;
      }

  }

  & .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 25rem;
    padding-top: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue };
    & .btn {
      &-profile {
        width: 18rem;
        height: 3rem;
        margin: 0.5rem 0;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.purple };
        color: white;
      }

      &-team {
        width: 18rem;
        height: 3rem;
        margin: 0.5rem 0;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.violet };
        color: white;
      }
    }
  }
`

export default Wrapper