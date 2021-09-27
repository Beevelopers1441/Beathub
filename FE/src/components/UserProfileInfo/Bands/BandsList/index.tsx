import React from 'react';
import BandsItem from '../BandsItem';
import Wrapper from './styles';
import { Bands } from 'types'

// 밴드 목록을 Props로 받는다
const BandsList: React.FC<Bands> = ({ bands }) => {

  // Prop으로 받은 밴드 목록의 각각의 밴드들을 BandsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] => {
    return bands.map((band) => {
      return(
          <BandsItem band={band}></BandsItem>
      )
    })
  }

  // 위의 함수를 리턴한다(각각의 밴드를 아이템으로 보여준다)
  return (
    <Wrapper>
      <div className="bands-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default BandsList;