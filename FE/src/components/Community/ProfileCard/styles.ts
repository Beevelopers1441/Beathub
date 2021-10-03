import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.lightBlue };
  width: 220px;
  height: 5.5rem;
  margin-left: 2rem;
  padding: 0.7rem 0.7rem 0.7rem 1rem;
  border-radius: 12px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  & .name-container {

    & .name {
      color: ${({ theme }) => theme.colors.darkBlue };
      margin: 0.3rem 0.4rem 0 0;
      text-align: right;
      font-size: 1.1rem;
    }
    & .name-tooltip {
      cursor: pointer;
    }
  }
`;

export default Wrapper;