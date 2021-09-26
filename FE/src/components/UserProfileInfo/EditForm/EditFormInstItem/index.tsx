import React from 'react';
import { Instrument } from 'types';

import Wrapper from './styles';

interface Props {
  instrument: Instrument;
}

const EditFormInstItem: React.FC<Props> = ({ instrument }) => {

  const onDeleteInst = () => {

  }
  
  return(
    <Wrapper>
      <div className="item-wrapper">
        <div className="item-letter">
          {instrument.name} {instrument.skill} 
        </div>
        <div className="overlay" onClick={onDeleteInst}>
          <div>Delete</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default EditFormInstItem;