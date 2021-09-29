import React from 'react';
import Wrapper from './styles';

interface IProps {
  nickname: string;
}

const Nickname: React.FC<IProps> = ({ nickname }) => {
  return(
    <Wrapper>
      <div className="nickname">{nickname}</div>
    </Wrapper>
  )
}

export default Nickname;