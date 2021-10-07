import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;

  & .title-input-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    width: 28rem;
    border: 1px solid white;
    border-radius: 5px;
    // 배경이 뿌옇게 되도록 효과
    border-radius: 10px;
    backdrop-filter: blur(50px);

  }
  
  & .search-input {
    width: 100%; /* 원하는 너비 설정 */
    height: auto; /* 높이값 초기화 */
    line-height: normal; /* line-height 초기화 */
    padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
    background-color: transparent;
    color: #ffffff;
    font-family: inherit; /* 폰트 상속 */
    border: none;
    border-radius: 5px; /* iSO 둥근모서리 제거 */
    outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
    -moz-appearance: none;
    appearance: none;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(255, 255, 255, 0.7);
      opacity: 1; /* Firefox */
    }
  }

  
  & .search-icon {
    color: white;
    font-size: 1rem;
    vertical-align: middle;
    margin: 0 0.5rem;
  }
  & .search-button {
    width: 7rem;
    margin-left: 0.5rem;
    text-align: center;
    border-radius: 3px;
    border: 0.5px solid white;
    background-image: ${({ theme }) => theme.colors.violetPink };
    color: white;
  }
`;

export default Wrapper;
