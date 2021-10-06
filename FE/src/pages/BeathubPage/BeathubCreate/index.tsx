import React, { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

// styles
import Wrapper from './styles';
import { Button } from '@mui/material';

import { createBucket } from 'lib/api/beathub';


function BeathubCreate(): ReactElement {

  const history = useHistory();

  const { isLoggedIn } = useSelector((state: any) => state.user);

  const [title, setTitle] = useState("")
  const [introduction, setIntroduction] = useState("")


  const onChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    var newValue = e.currentTarget.value;
    setTitle(newValue)
  }

  const onChangeIntro = (e: React.FormEvent<HTMLTextAreaElement>) => {
    var newValue = e.currentTarget.value;
    setIntroduction(newValue)
  }

  const onClickStart = () => {
    const payload = {
      bpm: 0, 
      introduction: introduction, 
      title: title }
    
    // 버켓 생성 후 거기로 이동
    createBucket(payload)
    .then(res => {
      var beathubId = res.data.id
      history.push(`/beathub/${beathubId}`)
    })
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="content">제목</div>
        <input
            type="text"
            className="post-input"
            value={title}
            onChange={onChangeTitle}
          />
      </div>
      <div className="container">
        <div className="content">설명</div>
        <textarea
            className="post-input post-textarea"
            maxLength={200}
            value={introduction}
            onChange={onChangeIntro}
          />
      </div>

        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={onClickStart}
        >
          합주 시작하기!
        </Button>
    </Wrapper>
  )
}

export default BeathubCreate
