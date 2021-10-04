import React from 'react';
// import MemberItem from '../MemberItem';

import { Grid } from '@mui/material';
import Wrapper from './styles';

import { Member } from 'types'

interface Props {
  members: Member[];
}

const MemberList: React.FC<Props> = ({ members }) => {

  const renderList = (): JSX.Element[] | JSX.Element => {
    if (members.length > 0) {
      return members.map((member) => {
        return(
          <div>
            {/* <MemberItem key={member.id} member={member}></MemberItem> */}
          </div>
        )
      })
    }
    return <div className="secondary-letter">아직 멤버가 없습니다.</div>
  }

  return(
    <Wrapper>
      <Grid container>
        <Grid item xs={2}>
          <div className="title">멤버</div>
        </Grid>
        <Grid item xs={2}>
          <div className="item-wrapper">
            {renderList()}
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default MemberList;