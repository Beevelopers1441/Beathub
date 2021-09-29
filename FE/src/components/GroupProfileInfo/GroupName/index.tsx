import React from 'react';
import Wrapper from './styles';

interface IProps {
  groupName: string;
}

const GroupName: React.FC<IProps> = ({ groupName }) => {
  return(
    <Wrapper>
      <div className="group-name">{groupName}</div>
    </Wrapper>
  )
}

export default GroupName;