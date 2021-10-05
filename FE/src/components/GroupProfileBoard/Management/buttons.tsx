import React from 'react';

// apis
import { approveAPI, disapproveAPI } from 'lib/api/band';

// styles
import { Button } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface IMember {
  userId: number;
  name: string;
  instrument: string;
  status: string;
  approve: number | null;
}

interface Props {
  bandId: number;
  userId: number;
  members: IMember[];
  setMembers: React.Dispatch<React.SetStateAction<IMember[]>>;
}

function ApproveBtn({bandId,  members, setMembers, userId }: Props): React.ReactElement {
  const handleApprove = () => {
    approveAPI(bandId, userId)
      .then(() => {
        const _newMembers = [...members];
        const newMembers = _newMembers.map(member => {
          if (member.userId === userId) {
            member.status = '밴드원';
            member.approve = null;
          }
          return member;
        })
        setMembers(newMembers);
      });
  };

  return (
    <Button onClick={handleApprove} variant="contained">
      승인
    </Button>
  )
};


function DisapproveBtn({ bandId, members, setMembers, userId }: Props): React.ReactElement {
  const handleDisapprove = () => {
    disapproveAPI(bandId, userId)
      .then(() => {
        const _newMembers = [...members];
        const newMembers = _newMembers.filter(member => member.userId !== userId)
        setMembers(newMembers);
      })
  };

  return (
    <Button onClick={handleDisapprove} variant="contained" color="error">
      거절
    </Button>
  )
};

function ApproveBtns({ bandId, members, setMembers, userId }: Props): React.ReactElement {
  return (
    <Wrapper>
      <ApproveBtn bandId={bandId} members={members} setMembers={setMembers} userId={userId} />
      <DisapproveBtn bandId={bandId} members={members} setMembers={setMembers} userId={userId} />
    </Wrapper>
  );
};

export { ApproveBtns };