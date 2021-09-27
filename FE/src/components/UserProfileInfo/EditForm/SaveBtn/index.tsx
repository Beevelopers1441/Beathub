import React from 'react';
import Wrapper from './styles';

interface IProps {
  onToggleEdit: () => void
}

function SaveBtn({ onToggleEdit }: IProps) {

  const onClickSave = () => {
    onToggleEdit();
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