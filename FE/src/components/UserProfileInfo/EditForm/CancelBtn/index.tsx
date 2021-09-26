import React from 'react';
import Wrapper from './styles';

function CancelBtn() {
  return(
    <Wrapper>
      <button className="cancel-btn">
        <div className="cancel-btn-letter">Cancel</div>
      </button>
    </Wrapper>
  )
}

export default CancelBtn;