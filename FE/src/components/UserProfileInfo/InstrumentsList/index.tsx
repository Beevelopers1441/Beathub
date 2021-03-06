import React from 'react';
import InstrumentsItem from './InstrumentsItem';
import Wrapper from './styles';
import { Instrument } from 'types'

interface Props {
  instruments: Instrument[]
}

// 악기 목록을 Props로 받는다
const InstrumentsList: React.FC<Props> = ({ instruments }) => {

  // Prop으로 받은 악기 목록의 각각의 악기들을 InstrumentsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] | JSX.Element => {
    if (instruments.length > 0) {
      return instruments.map((instrument, key) => {
        return(
          <InstrumentsItem key={key} instrument={instrument}></InstrumentsItem>
        )
      })
    }
    return <div className="secondary-letter">아직 연주할 수 있는 악기가 없습니다.</div>
  }

  // 위의 함수를 리턴한다(각각의 악기를 아이템으로 보여준다)
  return (
    <Wrapper>
      <div className="instruments-letter">연주 악기</div>
      <div className="instruments-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default InstrumentsList;