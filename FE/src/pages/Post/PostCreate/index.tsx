import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// components
import { TagList } from 'components';
import { InstrumentPicker } from 'components/Community';

// styles
import { Container, Snackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';

import Wrapper from './styles';

// types
interface Props {}
type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function PostCreate(props: Props): React.ReactElement {
  const [teamFlag, setTeamFlag] = useState<number>(0);
  const [currTags, setCurrTags] = useState<string[]>([]);
  const [currInst, setCurrInst] = useState<string | null>('');

  const tagRef: any = useRef();
  const titleRef: any = useRef();
  const contentRef: any = useRef();

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

  // handle tags
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
  
  // save
  const handleSavePost = () => {
    const _title = titleRef.current?.value;
    const _inst = currInst;
    const _content = contentRef.current?.value;
    
    if (!_title || !_inst || !_content) {
      handleSnackbar(TransitionUp)();
    }
    console.log(_title, _inst, _content);
  };
  
  /* snackbar */
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  const handleSnackbar = (Transition: React.ComponentType<TransitionProps>) => () => {
    console.log('true!!!!!!!!!!!!!!!!!!!!!!')
    setTransition(() => Transition);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* end snackbar */

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
            ref={titleRef}
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
        <div className="input-container instrument-container">
          <p className="post-p">악기</p>
          <InstrumentPicker width={'150px'} setCurrInst={setCurrInst} />
        </div>
        <div className="input-container">
          <p className="post-p">내용</p>
          <textarea
            ref={contentRef}
            className="post-input post-textarea"
            placeholder="내용을 입력해주세요."
          />
        </div>
        <div className="bottom-btn-container">
          <Link to="/community">
            <button className="btn-cancel">취소</button>
          </Link>
          <button onClick={handleSavePost} className="btn">
            저장
          </button>
        </div>
      </Container>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="제목, 내용, 악기를 모두 입력해주세요."
        key={transition ? transition.name : ''}
      />
    </Wrapper>
  );
}

export default PostCreate;
