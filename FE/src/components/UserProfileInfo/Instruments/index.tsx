import React from 'react';
import InstrumentsItem from './InstrumentsItem';
import Wrapper from './styles';

function ProfileImg() {
  return(
    <Wrapper>
      <div className="instruments-letter">연주 악기</div>
      <div className="instruments-list">
        <InstrumentsItem></InstrumentsItem>
      </div>
    </Wrapper>
  )
}

export default ProfileImg;