import React from 'react';
import Wrapper from './styles';

interface Props {
  inst: string;
}

const InstItem: React.FC<Props> = ({ inst }) => {
  return(
    <Wrapper>{inst}</Wrapper>
  )
}

export default InstItem;