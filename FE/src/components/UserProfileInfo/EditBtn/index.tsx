import React from 'react';
import Wrapper from './styles';

interface IProps {
  onToggleEdit: () => void
}

function EditBtn({ onToggleEdit }: IProps) {

  const onClickEditBtn = () => {
    onToggleEdit();
  }

  return(
    <Wrapper>
      <button className="edit-btn" onClick={onClickEditBtn}>
        <div className="edit-btn-letter">Edit profile</div>
      </button>
    </Wrapper>
  )
}

export default EditBtn;