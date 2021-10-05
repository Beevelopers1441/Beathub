import React, { useState } from 'react'

import EditBtn from '../EditBtn';

import { Grid } from '@mui/material';
import Wrapper from './styles';

import { Band } from 'types';

import { updateGroupProfile } from 'lib/api/groupProfile';

interface Props {
  band: Band;
}

const Content: React.FC<Props> = ({ band }: Props) => {

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
    })
  }

  return(
    <Wrapper>
      <EditBtn onToggleEdit={onToggleEdit} onUpdate={onUpdate} editing={editing}></EditBtn>
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