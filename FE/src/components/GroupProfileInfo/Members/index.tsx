import React from 'react';
import Wrapper from './styles';
import MembersList from './MembersList'


// 더미 밴드 목록
const dummyMembers = [
  {
    id: 1,
    name: "슈퍼밴드",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlR112WKA9XNAmxiVqHq8vtSQGef0kNbd7w&usqp=CAU"
  },
  {
    id: 2,
    name: "버스커",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbywcTNyNYXPra9w-PRneOhFVRqKVTF3hOQ&usqp=CAU"
  },
  {
    id: 3,
    name: "박카스텐",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMxA-8g0QW-Mo04I4OltEfYJMR4Qr-qPseA&usqp=CAU"
  },
  {
    id: 4,
    name: "악마뮤지션",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSXhB74KRKwW_9Ozxkq4OHm1oxVyj2Uz0NA&usqp=CAU"
  },
]

function Bands() {
  return(
    <Wrapper>
      <div className="members-divider"></div>
      <div className="members-letter">활동하는 밴드</div>
      <MembersList members={dummyMembers}></MembersList>
    </Wrapper>
  )
}

export default Bands;