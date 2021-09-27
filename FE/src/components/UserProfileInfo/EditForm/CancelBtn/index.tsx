import React from 'react';
import Wrapper from './styles';

interface IProps {
  onToggleEdit: () => void
}

function CancelBtn({ onToggleEdit }: IProps) {

  const onClickCancel = () => {
    onToggleEdit();
  }

  return(
    <Wrapper>
      <button className="cancel-btn" onClick={onClickCancel}>
        <div className="cancel-btn-letter">Cancel</div>
      </button>
    </Wrapper>
  )
}

export default CancelBtn;