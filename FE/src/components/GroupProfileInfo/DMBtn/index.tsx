import React from 'react';

import Wrapper from './styles';
import dm from 'assets/svgs/dm.svg'

function DMBtn() {
  return(
    <Wrapper>
      <button className="dm-btn">
        <img className="dm-btn-letter" src={dm} alt="dm" />
      </button>
    </Wrapper>
  )
}

export default DMBtn;