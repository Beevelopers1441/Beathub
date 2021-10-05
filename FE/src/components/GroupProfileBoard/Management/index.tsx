import React, { useState, useEffect } from 'react';

// components
import { ApproveBtns } from './buttons';

// apis
import { getWaitingBandMembersAPI } from 'lib/api/band';

// types
import { BandProfileInfo, IBasicUser } from 'types';

// styles
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';
import Wrapper from './styles';

interface Column {
  id: 'idx' | 'name' | 'instrument' | 'status' | 'approve';
  label: string;
  minWidth?: number;
  align?: 'center';
}

const columns: readonly Column[] = [
  { id: 'idx', label: '순번', minWidth: 50, align: 'center', },
  { id: 'name', label: '이름', minWidth: 100, align: 'center', },
  {
    id: 'instrument',
    label: '악기',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    label: '상태',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'approve',
    label: '승인',
    minWidth: 170,
    align: 'center',
  },
];
interface IMember {
  userId: number;
  name: string;
  instrument: string;
  status: string;
  approve: number | null;
}
interface IWatingBand {
  createTime: string;
  id: number;
  imageUrl: string;
  introduction: string;
  name: string;
};
interface IWaitingInst {
  id: number;
  type: string;
}
interface IWaitingMember {
  band: IWatingBand;
  instrument: IWaitingInst;
  user: IBasicUser;
}
interface Props {
  bandInfo: BandProfileInfo;
}

function Management({ bandInfo }: Props): React.ReactElement {
  const [members, setMembers] = useState<IMember[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // constructor
  useEffect(() => {
    // 기존 멤버
    let newMembers: IMember[];
    newMembers = bandInfo.members.map(mem => {
      return (
        {
          userId: mem.member.id,
          name: mem.member.name,
          instrument: mem.type.type,
          status: mem.member.id === bandInfo.leader.id ? '밴드장' : '밴드원',
          approve: null
        }
      )
    })
    // waiting members
    getWaitingBandMembersAPI()
      .then(res => {
        const _members = res.data;
        const newWaitingMembers: IMember[] = _members.map((mem: IWaitingMember) => {
          return (
            {
              userId: mem.user.id,
              name: mem.user.name,
              instrument: mem.instrument.type,
              status: '승인 대기',
              approve: 1
            }
          )
        });
        newMembers = [...newMembers, ...newWaitingMembers];
        setMembers(newMembers);
      })
  }, [bandInfo]);

  // members update
  useEffect(() => {

  }, [members]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return(
    <Wrapper>
      <Paper sx={{ width: '100%', overflow: 'hidden' }} className="table-container">
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {members
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((member) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={member.userId}>
                      {columns.map((column, idx) => {
                        let value = column.id === 'idx' ? idx+1 : member[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            { column.id === 'approve' && value === 1 ? (
                              <ApproveBtns 
                                bandId={bandInfo.band.id}
                                members={members}
                                setMembers={setMembers}
                                userId={member.userId}
                              />
                            ) : (
                              <>
                                {value}
                              </>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={members.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Wrapper>
  )
}

export default Management;