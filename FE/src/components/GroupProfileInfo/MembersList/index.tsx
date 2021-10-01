import React from 'react';
import MembersItem from './MembersItem';
import Wrapper from './styles';
import { Member } from 'types'

interface Props {
  members: Member[]
}

// 멤버 목록을 Props로 받는다
const MembersList: React.FC<Props> = ({ members }) => {

  // Prop으로 받은 멤버 목록의 각각의 밴드들을 MembersItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] => {
    return members.map((member) => {
      return(
          <MembersItem member={member}></MembersItem>
      )
    })
  }

  // 위의 함수를 리턴한다(각각의 멤버를 아이템으로 보여준다)
  return (
    <Wrapper>
      <div className="members-divider"></div>
      <div className="members-letter">멤버</div>
      <div className="members-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default MembersList;