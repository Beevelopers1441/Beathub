import styled from 'styled-components'

const Wrapper = styled.span`
  & .item-wrapper{
    padding: 0.1rem 0.7rem;
    vertical-align: middle;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    font-size: 0.9rem;
  };
`;

export default Wrapper;