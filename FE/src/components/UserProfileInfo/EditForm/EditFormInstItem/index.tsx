import React from 'react';
import { Instrument } from 'types';

import Wrapper from './styles';

interface Props {
  instrument: Instrument,
  idx: number,
  deleteInst: (idx: number) => void,
}

const EditFormInstItem: React.FC<Props> = ({ instrument, idx, deleteInst }) => {

  const onDeleteInst = () => {
    deleteInst(idx)
  }
  
  return(
    <Wrapper>
      <div className="item-wrapper">
        <div className="item-letter">
          {instrument.instrument} {instrument.ability} 
        </div>
        <div className="overlay" onClick={onDeleteInst}>
          <div>Delete</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default EditFormInstItem;