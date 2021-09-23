import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// components
import { TagList } from 'components';

// styles
import { Container } from '@mui/material';
import Wrapper from './styles';

interface Props {}

function PostCreate(props: Props): React.ReactElement {
  const [teamFlag, setTeamFlag] = useState<number>(0);
  const [currTags, setCurrTags] = useState<string[]>([]);

  const tagRef: any = useRef();

  // change teamFlag
  useEffect(() => {
    const ele1 = document.querySelector(
      '.top-btn-container > button:nth-child(1)',
    );
    const ele2 = document.querySelector(
      '.top-btn-container > button:nth-child(2)',
    );
    if (teamFlag === 0) {
      ele1?.setAttribute('class', 'btn-active');
      ele2?.setAttribute('class', 'btn');
    } else {
      ele1?.setAttribute('class', 'btn');
      ele2?.setAttribute('class', 'btn-active');
    }
  }, [teamFlag]);

  const handleTeamFlag = (teamFlag: number) => {
    setTeamFlag(teamFlag);
  };

  const handleTags = (e: any) => {
    if (e.key === 'Enter') {
      const newTagValue = tagRef?.current.value.trim();

      // set tags
      let newCurrTags = [...currTags];
      if (newTagValue && newCurrTags.indexOf(newTagValue) === -1) {
        newCurrTags = [...newCurrTags, newTagValue];
        setCurrTags(newCurrTags);
      }

      // init tag value
      tagRef.current.value = '';
    }
  };

  return (
    <Wrapper>
      <Container className="container">
        <div className="top-btn-container">
          <button className="btn" onClick={() => handleTeamFlag(0)}>
            팀을 구하고 있어요
          </button>
          <button className="btn" onClick={() => handleTeamFlag(1)}>
            팀원을 구하고 있어요
          </button>
        </div>
        <div className="input-container">
          <p className="post-p">제목</p>
          <input
            type="text"
            className="post-input"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="input-container input-tag-container">
          <p className="post-p">태그</p>
          <input
            type="text"
            ref={tagRef}
            className="post-input post-input-tag"
            onKeyPress={handleTags}
            placeholder="태그를 설정해주세요."
          />
          <TagList currTags={currTags} setCurrTags={setCurrTags} />
        </div>
        <div className="input-container">
          <p className="post-p">내용</p>
          <textarea
            className="post-input post-textarea"
            placeholder="내용을 입력해주세요."
          />
        </div>
        <div className="bottom-btn-container">
          <Link to="/community">
            <button className="btn-cancel">취소</button>
          </Link>
          <button className="btn">저장</button>
        </div>
      </Container>
    </Wrapper>
  );
}

export default PostCreate;
