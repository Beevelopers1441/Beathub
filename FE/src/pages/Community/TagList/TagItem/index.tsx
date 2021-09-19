import React from 'react';

interface Props {
  tag: string;
  onDelete: any;
}

function TagItem({ tag, onDelete }: Props): React.ReactElement {

  return (
    <>
      <p>{tag}</p>
      <button onClick={() => onDelete(tag)}>x</button>
    </>
  );
}

export default TagItem;
