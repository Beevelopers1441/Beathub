import React from 'react';
import Wrapper from './styles';

interface IProps {
  intro: string | undefined;
}

const Intro: React.FC<IProps> = ({ intro }) => {

  return(
    <Wrapper>
      {
        intro === null || intro === ''
        ? <div className="intro">아직 등록된 자기소개가 없습니다.</div>
        : <div className="intro">{intro}</div>
      }
    </Wrapper>
  )
}

export default Intro;