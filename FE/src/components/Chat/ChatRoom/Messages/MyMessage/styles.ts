import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 180px;
  inline-size: fit-content;
  margin: 0.5rem;
  margin-left: auto;
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.colors.darkBlue };
  border-radius: 6px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: 'Spoqa Han Sans Neo';
  color: white;

  &:before {
    position: absolute;
    right: -6px;
    top: 4px;
    transform: rotate(-15deg);
    content: "";
    width: 0px;
    height: 0px;
    border-left: 4px solid ${({ theme }) => theme.colors.darkBlue };
    border-right: 4px solid transparent;
    border-top: 4px solid ${({ theme }) => theme.colors.darkBlue };
    border-bottom: 4px solid transparent;
  }
`;

export default Wrapper;