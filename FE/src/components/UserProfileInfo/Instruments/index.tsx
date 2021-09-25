import React from 'react';
import InstrumentsList from './InstrumentsList';
import Wrapper from './styles';

// 더미 악기 목록
const dummyInstruments = [
  {
    name: "피아노",
    skill: "上"
  },
  {
    name: "드럼",
    skill: "下"
  },
  {
    name: "기타",
    skill: "中"
  },
  {
    name: "베이스",
    skill: "上"
  },
]

function ProfileImg() {
  return(
    <Wrapper>
      <div className="instruments-letter">연주 악기</div>
      <div className="instruments-wrapper">
        <InstrumentsList instruments={dummyInstruments}></InstrumentsList>
      </div>
    </Wrapper>
  )
}

export default ProfileImg;