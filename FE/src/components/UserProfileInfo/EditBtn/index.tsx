import React from 'react';
import Wrapper from './styles';

interface IProps {
  onEditProfile: () => void
}

function EditBtn({ onEditProfile }: IProps) {

  const onClickEditbtn = () => {
    onEditProfile();
  }

  return(
    <Wrapper>
      <button className="edit-btn" onClick={onClickEditbtn}>
        <div className="edit-btn-letter">Edit profile</div>
      </button>
    </Wrapper>
  )
}

export default EditBtn;