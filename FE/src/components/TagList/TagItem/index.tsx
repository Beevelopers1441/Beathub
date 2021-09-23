import React from 'react';

//styles
import { Cancel } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  tag: string;
  onDelete: any;
}

function TagItem({ tag, onDelete }: Props): React.ReactElement {
  return (
    <Wrapper>
      <p>{tag}</p>
      <button onClick={() => onDelete(tag)}>
        <Cancel />
      </button>
    </Wrapper>
  );
}

export default TagItem;
