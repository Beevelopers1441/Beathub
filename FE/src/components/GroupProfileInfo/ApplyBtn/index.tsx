import React from 'react';

import Wrapper from './styles';

function ApplyBtn() {
  return(
    <Wrapper>
      <div className="divider"></div>
      <button className="apply-btn">
        <div className="apply-letter">밴드 가입 신청하기</div>
      </button>
    </Wrapper>
  )
}

export default ApplyBtn;