import React from 'react';

import Wrapper from './styles';

import { bandApply } from 'lib/api/band';

interface Props {
  id: number;
};


function ApplyBtn({ id }: Props): React.ReactElement {

  const onClickApply = () => {
    bandApply(id)
    .then(res => {
      console.log(res)
    })
  }

  return(
    <Wrapper>
      <div className="divider"></div>
      <button className="apply-btn" onClick={onClickApply}>
        <div className="apply-letter">밴드 가입 신청하기</div>
      </button>
    </Wrapper>
  )
}

export default ApplyBtn;