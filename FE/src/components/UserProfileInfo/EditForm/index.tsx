import React from 'react';

import Wrapper from './styles';
import { Grid } from '@mui/material';
import add from 'assets/svgs/add.svg';

import EditFormInstList from './EditFormInstList';
import SaveBtn from './SaveBtn';
import CancelBtn from './CancelBtn';

// 더미 악기 목록
const dummyInstruments = [
  {
    name: "피아노",
    skill: "上"
  },
  {
    name: "드럼",
    skill: "下"
  },
  {
    name: "기타",
    skill: "中"
  },
  {
    name: "베이스",
    skill: "上"
  },
]

interface IProps {
  onToggleEdit: () => void
}

// function EditBtn({ onEditProfile }: IProps) {

//   const onClickEditbtn = () => {
//     onEditProfile();
//   }


function EditForm({ onToggleEdit }: IProps) {

  return(
    <Wrapper>
      {/* 닉네임 수정 */}
      <div className="input-container">
        <p className="post-p">닉네임</p>
        <input
          type="text"
          className="post-input"
          placeholder="기존 아이디"
        />
      </div>
      {/* 자기소개 수정 */}
      <div className="input-container">
        <p className="post-p">자기소개</p>
        <textarea
          className="post-input post-textarea"
          placeholder="기존 자기소개"
          maxLength={200}
        />
      </div>
      {/* 악기 목록 수정 */}
      <div className="input-container">
        <div className="add-instrument-wrapper post-p">
          <p>연주 악기</p>
          <img className="add-instrument-icon" src={add} alt="add" />
        </div>
        {/* <EditFormInstList instruments={dummyInstruments}></EditFormInstList> */}
      </div>
      {/* 저장, 취소 버튼 */}
      <div className="button-container">
        <Grid container direction="row">
          <Grid item xs={6}>
            <SaveBtn onToggleEdit={onToggleEdit}></SaveBtn>
          </Grid>
          <Grid item xs={6}>
            <CancelBtn onToggleEdit={onToggleEdit}></CancelBtn>
          </Grid>
        </Grid> 
      </div>
    </Wrapper>
  )
}

export default EditForm;