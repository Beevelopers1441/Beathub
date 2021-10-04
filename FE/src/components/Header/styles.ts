import styled from 'styled-components';

const Wrapper = styled.div`
  & .header-container {
    position: fixed;
    z-index: 1500;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: #212C4F;
    align-items: center;
    padding: 0rem 2rem;
    width: 100%;
    height: 70px;
    border-bottom: 0.5px solid white;
    transition: all 0.3s ease;
  }

  & .hide {
    top: -70px;
  }

  & .left-container {
    display: flex;

    & .logo-container {
      margin-right: 3rem;
      cursor: pointer;
    }
    & ul {
      display: flex;

      & li {
        margin: 0 1.5rem;
        cursor: pointer;
      }
    }
  }

  & .right-container {
    display: flex;
    align-items: center;

    & .right-sub-container {
      margin: 0 1.5rem;
    }
    & .search-container {
      border: 1px solid white;
      border-radius: 14px;
    }
    & .profile-container {
      & .user-image {
        width: 30px;
        height: 30px;
      }
    }
  }

  & .logout-btn {
    width: 50px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    padding: 0.25rem;
    margin-right: 1rem;

    & .logout-btn-letter {
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-size: 12px;
      text-align: center;
      color: #ABB0B5;
      :hover {
        color: #FFFFFF;
      }
    }
  }
`;

export default Wrapper;