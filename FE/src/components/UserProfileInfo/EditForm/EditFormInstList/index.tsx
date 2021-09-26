import React from 'react';
import EditFormInstItem from '../EditFormInstItem';
import Wrapper from './styles';
import { Instruments } from 'types'

// 악기 목록을 Props로 받는다
const EditFormInstList: React.FC<Instruments> = ({ instruments }) => {

  // Prop으로 받은 악기 목록의 각각의 악기들을 InstrumentsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] => {
    return instruments.map((instrument) => {
      return(
          <EditFormInstItem instrument={instrument}></EditFormInstItem>
      )
    })
  }

  // 위의 함수를 리턴한다(각각의 악기를 아이템으로 보여준다)
  return (
    <Wrapper>
      <div className="instruments-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default EditFormInstList;