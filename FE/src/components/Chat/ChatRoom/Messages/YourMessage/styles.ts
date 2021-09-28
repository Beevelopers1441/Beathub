import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 180px;
  inline-size: fit-content;
  margin: 0 auto 0.3rem 35px;
  padding: 0.5rem 0.8rem;
  background: white;
  border-radius: 6px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: 'Spoqa Han Sans Neo';
  color: ${({ theme }) => theme.colors.darkBlue };

  &:before {
    position: absolute;
    left: -6px;
    top: 4px;
    transform: rotate(105deg);
    content: "";
    width: 0px;
    height: 0px;
    border-left: 4px solid white;
    border-right: 4px solid transparent;
    border-top: 4px solid white;
    border-bottom: 4px solid transparent;
  }
`;

export default Wrapper;