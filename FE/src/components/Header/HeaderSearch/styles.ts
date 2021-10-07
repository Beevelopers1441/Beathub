import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  border-radius: 8px;
  background: rgba(198, 208, 235, 0.1);

  & .search-input {
    width: 100%;
    height: auto;
    line-height: normal;
    padding: 0.3rem 0.8rem;
    background-color: transparent;
    color: #ffffff;
    font-family: inherit;
    border: none;
    border-radius: 5px;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  & .search-icon {
    margin: 0.3rem 0.8rem;
    font-size: 1.3rem;
  }
`;

export default Wrapper;