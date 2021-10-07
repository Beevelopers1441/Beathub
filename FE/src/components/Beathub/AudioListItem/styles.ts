import styled from 'styled-components';

const Wrapper = styled.div`
  // border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white };
  border-radius: 10px;
  // border-color: ${({ theme }) => theme.colors.white };
  backdrop-filter: blur(50px);

  & .instrument-chip {
    margin-bottom: 0.3rem;
    background-color:${({ theme }) => theme.colors.black };
    border-color:${({ theme }) => theme.colors.white };
    color: ${({ theme }) => theme.colors.white };
  }

  & .list-item {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    padding-right: 0;
    padding-left: 0;
  }
`;

export default Wrapper;
