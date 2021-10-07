import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  opacity: 0.6;
  border: 1px solid white;
  border-radius: 5%;
  padding: 1rem;
  color: black;


  & .content {
    margin-bottom: 0.5rem;
    color: black;
  }

  & .post-input {
    width: 100%;
    height: 40px;
    line-height: normal;
    padding: 1.2em 0.7em;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  & .form-container {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  & .input-file {
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }

  & .save-btn {
    margin: 1rem 0.5rem 0 0;
    text-align: center;
    width: 100%;
    height: 40px;
    background: #D99BFF;
    border-radius: 10px;
  }

  & .cancel-btn {
    border: 1px solid black;
    margin: 1rem 0.5rem 0 0;
    text-align: center;
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  & .btn-container{
    display: flex;
  }
`;

export default Wrapper;