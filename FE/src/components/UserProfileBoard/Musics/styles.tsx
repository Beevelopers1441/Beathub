import styled from 'styled-components'

const Wrapper = styled.div`
  & .container {
    height: 40rem;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 6px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  & .audios-empty {
    text-align: center;
    margin-top: 200px;
    font-size: 20px;
    color: #ABB0B5;
  }
`

export default Wrapper