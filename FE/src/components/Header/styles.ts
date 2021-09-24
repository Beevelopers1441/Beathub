import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  width: 100%;
  height: 70px;
  border-bottom: 0.5px solid white;

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
`;

export default Wrapper;