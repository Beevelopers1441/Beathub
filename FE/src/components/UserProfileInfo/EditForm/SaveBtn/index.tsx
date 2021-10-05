import React from 'react';
import Wrapper from './styles';

interface IProps {
  onToggleEdit: () => void,
  onUpdate: () => void
}

function SaveBtn({ onToggleEdit, onUpdate }: IProps) {

  const onClickSave = () => {
    onToggleEdit();
    onUpdate()
  }

  return(
    <Wrapper>
      <button className="save-btn" onClick={onClickSave}>
        <div className="save-btn-letter">Save</div>
      </button>
    </Wrapper>
  )
}

export default SaveBtn;