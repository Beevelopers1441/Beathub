import styled from 'styled-components'
import Background6 from 'assets/svgs/Background6.svg'

const Wrapper = styled.div`
  padding-top: 9vh;
  height: 100vh;
  background-position: center center;
  background-image: url(${Background6});
  background-repeat : no-repeat;
  background-size : cover;

  & .community-title-container {
    justify-content: center;
    display: flex;
  }

  & .community-title {
    padding: 1.5rem;
    width: 80%;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    border: 1px solid white;
    border-radius: 10px;
    backdrop-filter: blur(50px);
  }

  & .community-container {
    display: flex;
    

    & .leftbar {
      cursor: pointer;
    }
  }

  & .sub-container {
    min-width: 1140px;
  }

  & .main-container {
    padding-bottom: 4rem;
  }


  /* leftbar */
  & .teamFlag {
    color: #ABB0B5;
    text-align: right;
    font-size: 1.2rem;
    margin: 0 3rem 1.3rem 0;
    cursor: pointer;
  }

  & .teamFlag-active {
    text-align: right;
    font-size: 1.2rem;
    margin: 0 3rem 1.3rem 0;
    cursor: pointer;
  }

  /* LinkTab */
  & .linktab-container {
    display: flex;
    border-bottom: 0.5px solid white;
    
  }

  & .create-container {
    display: flex;
    justify-content: end;
    & .create-btn {
      width: 5rem;
      height: 2rem;
      margin: 1rem 0;
      border-radius: 3px;
      border: 0.5px solid white;
      background-image: ${({ theme }) => theme.colors.pinkDarkGreen };
      text-align: center;
      color: white;
    }
  }
  & .no-content {
    text-align: center;
    color: white;
    font-weight: 700;
  }
`

export default Wrapper