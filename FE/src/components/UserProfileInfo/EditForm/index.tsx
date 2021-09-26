import React from 'react';
import Wrapper from './styles';


function EditForm() {

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
      <div className="">

      </div>
    </Wrapper>
  )
}

export default EditForm;