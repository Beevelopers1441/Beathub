import React from 'react';
import Wrapper from './styles';

interface IProps {
  intro: string | undefined;
}

const Intro: React.FC<IProps> = ({ intro }) => {

  return(
    <Wrapper>
      <div className="intro">{intro}</div>
    </Wrapper>
  )
}

export default Intro;