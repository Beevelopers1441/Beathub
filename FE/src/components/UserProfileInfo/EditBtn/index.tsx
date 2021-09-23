import React from 'react';
import Wrapper from './styles';

function EditBtn() {
  return(
    <Wrapper>
      <button className="edit-btn">
        <div className="edit-btn-letter">Edit profile</div>
      </button>
    </Wrapper>
  )
}

export default EditBtn;