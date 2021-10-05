import React from 'react';
import MemberItem from './MemberItem';

import { Grid } from '@mui/material';
import Wrapper from './styles';

import { BandMember } from 'types'

interface Props {
  members: BandMember[];
}

const MemberList: React.FC<Props> = ({ members }) => {

  const renderList = (): JSX.Element[] | JSX.Element => {
    if (members.length > 0) {
      return members.map((member) => {
        return(
          <MemberItem key={member.member.id} member={member}></MemberItem>
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
        <Grid item xs={10}>
          <div className="members-wrapper">
            {renderList()}
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default MemberList;