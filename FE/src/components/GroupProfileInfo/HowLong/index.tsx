import React from 'react';
import Wrapper from './styles';

interface Props {
  createdAt: Date;
}

const HowLong: React.FC<Props> = ({ createdAt }: Props) => {
  console.log(typeof(createdAt))

  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  var howLong = currentDate.getTime() - createdDate.getTime();
  var btDay = Math.ceil(howLong / (1000*60*60*24))

  return(
    <Wrapper>
      <div className="text">합주 {btDay}일째!</div>
    </Wrapper>
  )
}

export default HowLong;