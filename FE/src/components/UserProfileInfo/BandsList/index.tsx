import React from 'react';
import BandsItem from './BandsItem';
import Wrapper from './styles';
import { Band } from 'types'

interface IProps {
  participatingBands: Band[]
}

// 밴드 목록을 Props로 받는다
const BandsList: React.FC<IProps> = ({ participatingBands }) => {

  // Prop으로 받은 밴드 목록의 각각의 밴드들을 BandsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] | JSX.Element => {
    if (participatingBands.length > 0) {
      return participatingBands.map((band) => {
        return(
            <BandsItem key={band.id} band={band}></BandsItem>
        )
      })
    }
    return <div className="secondary-letter">아직 활동하는 밴드가 없습니다.</div>
  }

  // 위의 함수를 리턴한다(각각의 밴드를 아이템으로 보여준다)
  return (
    <Wrapper>
      <div className="bands-divider"></div>
      <div className="bands-letter">활동하는 밴드</div>
      <div className="bands-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default BandsList;