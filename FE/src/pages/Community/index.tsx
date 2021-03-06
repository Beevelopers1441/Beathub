import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

// Components
import { Posts, LinkTab, CommunitySearch } from 'components/Community';

// api
import { getBandPosts, getMemberPosts } from 'lib/api/community';

// utils
import { setTeamFlagColor } from 'utils/community';

// styles
import { Container, Grid, Button } from '@mui/material';
import Wrapper from './styles';

// types
import { IPost } from 'types';

interface Props {}

function Community(props: Props): React.ReactElement {
  const [teamFlag, setTeamFlag] = useState<number>(0);
  const [tabsIdx, setTabsIdx] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currPosts, setCurrPosts] = useState<IPost[]>([]);
  const [currTitle, setCurrTitle] = useState<string>('');
  const [currTag, setCurrTag] = useState('');

  const titleRef: any = useRef();
  const { isLoggedIn } = useSelector((state: any) => state.user);
  const { state } = useLocation<any>();
  const history = useHistory();

  // redirect to login
  useEffect(() => {
    if (!isLoggedIn) {
      const loc = { pathname: '/login' };
      history.replace(loc);
    };
  }, [history, isLoggedIn]);

  // team flag select
  useEffect(() => {
    if (teamFlag === 0) {  // member post(개인이 팀 구하기)
      getMemberPosts()
        .then(res => {
          const newMemberPosts = res.data;
          setPosts(newMemberPosts);
        })
    } else {  // band post(밴드팀이 팀원 구하기)
      getBandPosts()
        .then(res => {
          const newBandPosts = res.data;
          setPosts(newBandPosts);
        })
    }

    // init
    titleRef.current.value = '';
    setCurrTitle('');

  }, [teamFlag]);

  // routing props
  useEffect(() => {
    if (!state) return

    const idx = state.tFlag;
    setTeamFlagColor(idx)
    setTeamFlag(idx);
  }, [state]);
  
  // current Posts filter
  useEffect(() => {
    if (!posts) return;

    let newCurrPosts: IPost[] = [...posts];
    newCurrPosts.sort((a, b) => (+(new Date(b.createTime)) - +(new Date(a.createTime))));  // 최신 게시글 순 정렬

    // tabs index
    if (tabsIdx === 1) {  // proceeding
      newCurrPosts = newCurrPosts.filter(post => post.recruiting);
    } else if (tabsIdx === 2) {  // done
      newCurrPosts = newCurrPosts.filter(post => !post.recruiting);
    }

    if (!currTitle && !currTag) {
      setCurrPosts(newCurrPosts);
    } else {
      // set current title
      if (currTitle) {
        newCurrPosts = newCurrPosts.filter(
          post => post.title.indexOf(currTitle) !== -1,
        );
      }

      // set current tag
      if (currTag) {
        newCurrPosts = newCurrPosts?.filter(post => post.tag.type === currTag);
      }
      setCurrPosts(newCurrPosts);
    }
  }, [posts, tabsIdx, currTitle, currTag]);

  // tabs index change color
  useEffect(() => {
    const li = [0, 1, 2];
    li.splice(tabsIdx, 1);
    const ele = document.querySelector(
      `.linktab-container > div:nth-child(${tabsIdx + 1}) > p`,
    );
    ele?.classList.add('tabs-title-active');

    for (const n of li) {
      const _ele = document.querySelector(
        `.linktab-container > div:nth-child(${n + 1}) > p`,
      );
      _ele?.classList.remove('tabs-title-active');
    }
  }, [tabsIdx]);

  const handleTeamFlag = (idx: number): void => {
    setTeamFlagColor(idx);
    setTeamFlag(idx);
  };

  /* search */
  // search inputs
  const handleInputs = (e: any) => {
    if (e.key === 'Enter' || e.target.id === 'search-button') {
      const newTitleValue = titleRef?.current.value.trim();
      setCurrTitle(newTitleValue);
    };
  };

  return (
    <Wrapper>
      <div className="community-title-container">
        <div className="community-title">
          사람들과 소통할 수 있는 공간입니다.
          마음 맞는 사람들에게 댓글을 남겨보세요.
        </div>
      </div>
      <Container className="community-container">
        <Grid container className="sub-container">
          <Grid item xs={2} className="teamFlag-container">
            <p onClick={() => handleTeamFlag(0)} className="teamFlag-active">
              팀 구하기
            </p>
            <p onClick={() => handleTeamFlag(1)} className="teamFlag">
              팀원 구하기
            </p>
          </Grid>

          <Grid item xs={10} className="main-container">
            <div className="linktab-container">
              {[0, 1, 2].map(value => {
                return (
                  <LinkTab
                    setTabsIdx={setTabsIdx}
                    tabsIdx={value}
                    key={value}
                  />
                );
              })}
            </div>
            <CommunitySearch
              setCurrTag={setCurrTag}
              handleInputs={handleInputs}
              titleRef={titleRef}
            />
            <div className="create-container">
              <Link to={`post/${teamFlag}`}>
                <Button className="create-btn">글쓰기</Button>
              </Link>
            </div>
            { currPosts ? (
              <Posts currPosts={currPosts} teamFlag={teamFlag} />
            ) : (
              <div className="no-content">게시글이 없습니다.</div>
            )}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Community;
