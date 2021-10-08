import React from 'react';
import Wrapper from './styles';

// styles
import { Button } from '@mui/material';

interface IProps {
  editing: boolean,
  onToggleEdit: () => void,
  onUpdate: () => void,
  onCancel: () => void
}

function EditBtn({ onToggleEdit, onUpdate, onCancel, editing }: IProps) {

  const onClickEdit = () => {
    onToggleEdit();
  }

  const onClickCancel = () => {
    onToggleEdit();
    onCancel();
  }

  const onClickSave = () => {
    onToggleEdit();
    onUpdate();
  }

  return(
    <Wrapper>
      
      { !editing
      ?  
        <Button className="edit-btn" onClick={onClickEdit}>
          <div className="edit-btn-letter">Edit</div>
        </Button>
      :
        <div>
          <Button className="edit-btn" onClick={onClickSave}>
            <div className="edit-btn-letter">Save</div>
          </Button>
          <Button className="cancel-btn" onClick={onClickCancel}>
            <div className="cancel-btn-letter">Cancel</div>
          </Button>
        </div>
      }


    </Wrapper>
  )
}

export default EditBtn;