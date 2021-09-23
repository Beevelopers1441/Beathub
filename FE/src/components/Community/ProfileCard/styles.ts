import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.lightBlue };
  width: 200%;
  height: 5.5rem;
  margin-left: 2rem;
  padding: 0.7rem 0.7rem 0.7rem 1rem;
  border-radius: 12px;
  -webkit-box-shadow: 6px 8px 27px -4px rgba(255,255,255,0.89); 
  box-shadow: 6px 8px 27px -4px rgba(255,255,255,0.89);

  & .name-container {

    & .name {
      color: ${({ theme }) => theme.colors.darkBlue };
      margin: 0.3rem 0.4rem 0 0;
      font-size: 1.1rem;
    }
  }
`;

export default Wrapper;