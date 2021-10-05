import React from 'react';
import Wrapper from './styles';

interface IProps {
  editing: boolean,
  onToggleEdit: () => void,
  onUpdate: () => void
}

function EditBtn({ onToggleEdit, onUpdate, editing }: IProps) {

  const onClickEdit = () => {
    onToggleEdit();
  }

  const onClickCancel = () => {
    onToggleEdit();
  }

  const onClickSave = () => {
    onToggleEdit();
    onUpdate();
  }

  return(
    <Wrapper>
      { !editing
      ?  
        <button className="edit-btn" onClick={onClickEdit}>
          <div className="edit-btn-letter">Edit</div>
        </button>
      :
        <div>
          <button className="edit-btn" onClick={onClickSave}>
            <div className="edit-btn-letter">Save</div>
          </button>
          <button className="cancel-btn" onClick={onClickCancel}>
            <div className="cancel-btn-letter">Cancel</div>
          </button>
        </div>
      }


    </Wrapper>
  )
}

export default EditBtn;