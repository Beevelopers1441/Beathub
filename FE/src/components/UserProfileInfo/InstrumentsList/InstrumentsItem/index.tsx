import React from 'react';
import Wrapper from './styles';
import { Instrument } from 'types';

interface Props {
  instrument: Instrument
}

const InstrumentsItem: React.FC<Props> = ({ instrument }) => {
  return(
    <Wrapper>
      <div className="item-wrapper">
        <div className="item-letter">{instrument.instrument} {instrument.ability}</div>
      </div> 
    </Wrapper>
  )
}

export default InstrumentsItem;