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
        <img className="item-img" src={band.imageUrl} alt="band_image"/>
      </div> 
    </Wrapper>
  )
}

export default BandsItem;