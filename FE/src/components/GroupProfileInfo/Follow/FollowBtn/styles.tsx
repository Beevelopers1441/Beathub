import styled from 'styled-components'

const Wrapper = styled.div`
  & .follow-btn {
    width: 100%;
    height: 40px;
    background: ${({ theme }) => theme.colors.violetPink };
    border-radius: 10px;
    margin: 1rem 0 1rem 0;
    
    & .follow-btn-letter {
      /* Edit profile */
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }

  & .unfollow-btn {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin: 1rem 0 1rem 0;
    border: 1px solid #FFFFFF;

    & .unfollow-btn-letter {
      /* Edit profile */
      font-family: Spoqa Han Sans Neo;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }
`

export default Wrapper