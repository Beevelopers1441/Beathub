import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Wrapper from './styles';
import { Grid } from '@mui/material';

import EditFormInstList from './EditFormInstList';
import SaveBtn from './SaveBtn';
import CancelBtn from './CancelBtn';

// types
import { ProfileInfo } from 'types';

// apis
import { updateUserProfile } from 'lib/api/userProfile';

import { refreshPageAction } from 'modules/user/actions';


interface IProps {
  userInfo: ProfileInfo,
  onToggleEdit: () => void
}

// function EditBtn({ onEditProfile }: IProps) {

//   const onClickEditbtn = () => {
//     onEditProfile();
//   }


function EditForm({ userInfo, onToggleEdit }: IProps) {
  const dispatch = useDispatch();

  const [_name, SetName] = useState(userInfo.nickname);
  const [_intro, SetIntro] = useState(userInfo.introduction);
  
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    var newValue = e.currentTarget.value;
    SetName(newValue)
  }

  const onChangeIntro = (e: React.FormEvent<HTMLTextAreaElement>) => {
    var newValue = e.currentTarget.value;
    SetIntro(newValue)
  }

  const onUpdate = () => {
    const imageUrl = userInfo.imageUrl
    const name = _name
    const introduction = _intro
    const payload = { imageUrl, name, introduction }
    updateUserProfile(userInfo.id, payload)
    .then(res => {
      console.log(res)
      dispatch(refreshPageAction());
    })

  }

  return(
    <Wrapper>
      {/* 닉네임 수정 */}
      <div className="input-container">
        <p className="post-p">닉네임</p>
        <input
          type="text"
          className="post-input"
          value={_name}
          onChange={onChangeName}
        />
      </div>
      {/* 자기소개 수정 */}
      <div className="input-container">
        <p className="post-p">자기소개</p>
        <textarea
          className="post-input post-textarea"
          value={_intro}
          maxLength={200}
          onChange={onChangeIntro}
        />
      </div>
      {/* 악기 목록 수정 */}
      <div className="input-container">
        <EditFormInstList instruments={userInfo.instruments}></EditFormInstList>
      </div>
      {/* 저장, 취소 버튼 */}
      <div className="button-container">
        <Grid container direction="row">
          <Grid item xs={6}>
            <SaveBtn onToggleEdit={onToggleEdit} onUpdate={onUpdate}></SaveBtn>
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