import React from 'react';
import Wrapper from './styles';

function SaveBtn() {
  return(
    <Wrapper>
      <button className="save-btn">
        <div className="save-btn-letter">Save</div>
      </button>
    </Wrapper>
  )
}

export default SaveBtn;