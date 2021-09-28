import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Posts, LinkTab, CommunitySearch } from 'components/Community';

// api
import { getBandPosts, getMemberPosts } from 'lib/api/community';

// styles
import { Container, Grid } from '@mui/material';
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

  // constructor
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
  
  // current Posts filter
  useEffect(() => {
    if (!posts) return;

    let newCurrPosts: IPost[] = [...posts];

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
    const ele0 = document.querySelector('.teamFlag-container > p:nth-child(1)');
    const ele1 = document.querySelector('.teamFlag-container > p:nth-child(2)');
    if (idx === 0) {
      ele0?.setAttribute('class', 'teamFlag-active');
      ele1?.setAttribute('class', 'teamFlag');
    } else {
      ele0?.setAttribute('class', 'teamFlag');
      ele1?.setAttribute('class', 'teamFlag-active');
    }
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

          <Grid item xs={10}>
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
              <Link to="/post">
                <button className="create-btn">글쓰기</button>
              </Link>
            </div>
            <Posts currPosts={currPosts} teamFlag={teamFlag} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Community;
