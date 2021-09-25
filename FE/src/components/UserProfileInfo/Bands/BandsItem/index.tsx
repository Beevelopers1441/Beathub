import React from 'react';
import Wrapper from './styles';
import { Band } from 'types';

interface Props {
  band: Band
}

const BandsItem: React.FC<Props> = ({ band }) => {
  return(
    <Wrapper>
      <div className="item-wrapper">
        <div className="item-letter">{band.name}</div>
      </div> 
    </Wrapper>
  )
}

export default BandsItem;