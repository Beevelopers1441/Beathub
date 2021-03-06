import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

// components
import { InstrumentPicker, BandPicker } from 'components/Community';

// apis
import { setMemberPost, setBandPost } from 'lib/api/community';
import { getUserProfile } from 'lib/api/userProfile';

// styles
import { Container, Snackbar, Button } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import Wrapper from './styles';


// types
import { Band } from 'types';
interface Props {}
type TransitionProps = Omit<SlideProps, 'direction'>;

interface ParamTypes {
  propTeamFlag: string | undefined;
};

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
};

function PostCreate(props: Props): React.ReactElement {
  const [teamFlag, setTeamFlag] = useState<number>(0);
  const [currInst, setCurrInst] = useState<string | null>('');
  const [bandList, setBandList] = useState<string[]>([]);
  const [currBand, setCurrBand] = useState<string | null>('');

  const { userInfo } = useSelector((state: any) => state.user);
  const titleRef: any = useRef();
  const contentRef: any = useRef();
  
  const history = useHistory();
  const { propTeamFlag } = useParams<ParamTypes>();
  
  // constructor
  useEffect(() => {
    const userId = userInfo.id;
    getUserProfile(userId)
      .then(res => {
        const newBandList = res.data.leadingBands.map((band: Band) => band.name);
        setBandList(newBandList);
      })
  }, [userInfo.id]);

  // teamFlag에 따른 create 양식 변경
  useEffect(() => {
    if (!propTeamFlag) return
    setTeamFlag(+propTeamFlag);
  }, [propTeamFlag]);

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

  // 팀, 팀원 구하는 sidebar 핸들링
  const handleTeamFlag = (teamFlag: number) => {
    setTeamFlag(teamFlag);
  };
  
  // save
  const handleSavePost = () => {
    const title: string = titleRef.current.value ? titleRef.current.value : '';
    const bandName: string = currBand ? currBand : '';
    const inst: string = currInst ? currInst : '';
    const content: string = contentRef.current?.value ? contentRef.current.value : '';
    
    if (teamFlag === 0) {  // 개인이 팀 구하기
      if (!title || !inst || !content) {
        handleSnackbar(TransitionUp)();
      } else {
        const payload = { title, inst, content };
        setMemberPost(payload)
          .then(() => {
            history.push({
              pathname: '/community',
            state: {
              tFlag: 0
            }});
          });
      }
    } else {  // 팀이 팀원 구하기
      if (!title || !inst || !content || !bandName) {
        handleSnackbar(TransitionUp)();
      } else {
        const payload = { title, inst, bandName, content };
        setBandPost(payload)
          .then(() => {
            history.push({
              pathname: '/community',
            state: {
              tFlag: 1
            }});
          });
      }
    }

  };
  
  /* snackbar */
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  const handleSnackbar = (Transition: React.ComponentType<TransitionProps>) => () => {
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
        { teamFlag === 1 ? (
          <div className="input-container">
            <p className="post-p">밴드명</p>
            <BandPicker width={'150px'} bandList={bandList} setCurrBand={setCurrBand} />
        </div>
        ) : (
          null
        )}
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
            <Button className="btn-cancel">취소</Button>
          </Link>
          <Button onClick={handleSavePost} className="btn">
            저장
          </Button>
        </div>
      </Container>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={ teamFlag === 0 ? "제목, 내용, 악기를 모두 입력해주세요." : "제목, 내용, 악기, 밴드를 모두 입력해주세요." }
        key={transition ? transition.name : ''}
      />
    </Wrapper>
  );
}

export default PostCreate;
