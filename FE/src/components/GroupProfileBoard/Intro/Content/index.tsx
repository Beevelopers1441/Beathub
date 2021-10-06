import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditBtn from '../EditBtn';

import { Grid } from '@mui/material';
import Wrapper from './styles';

import { Band } from 'types';

import { updateGroupProfile } from 'lib/api/groupProfile';

import { refreshPageAction } from 'modules/user/actions';

interface Props {
  band: Band,
  masterId: number,
}

const Content: React.FC<Props> = ({ band, masterId }: Props) => {

  console.log(band)
  
  const id = useSelector((state: any) => state.user.userInfo.id)

  const dispatch = useDispatch();

  const [editing, SetEditing] = useState(false);
  const [_name, SetName] = useState(band.name);
  const [_intro, SetIntro] = useState(band.introduction);

  const onToggleEdit = () => {
    SetEditing(!editing)
  }

  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    var newValue = e.currentTarget.value;
    SetName(newValue)
  }

  const onChangeIntro = (e: React.FormEvent<HTMLTextAreaElement>) => {
    var newValue = e.currentTarget.value;
    SetIntro(newValue)
  }

  const onUpdate = () => {
    const bandProfileImage = band.imageUrl
    const name = _name
    const introduction = _intro
    const payload = { bandProfileImage, name, introduction };
    updateGroupProfile(band.id, payload)
    .then(res => {
      console.log(res)
      dispatch(refreshPageAction());
    })
  }

  const onCancel = () => {
    SetIntro(band.introduction)
    SetName(band.name)
  }

  return(
    <Wrapper>
      {id === masterId &&
        <EditBtn onToggleEdit={onToggleEdit} onUpdate={onUpdate} onCancel={onCancel} editing={editing}></EditBtn>
      }
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">밴드</div>
        </Grid>
        <Grid item xs={10}>
          {!editing 
          ? <div className="content">{band.name}</div>
          : <input
              type="text"
              className="post-input"
              value={_name}
              onChange={onChangeName}
            />
          }
        </Grid>
      </Grid>
      <Grid container className="intro-container">
        <Grid item xs={2}>
          <div className="title">소개글</div>
        </Grid>
        <Grid item xs={10}>
        {!editing 
        ? <div className="content">{band.introduction}</div>
        : <textarea
            className="post-input post-textarea"
            maxLength={200}
            value={_intro}
            onChange={onChangeIntro}
          />
        }
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Content;