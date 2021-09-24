import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Header } from 'components';
import { Posts, LinkTab, TagList, CommunitySearch } from 'components/Community';

// api
import { getAllBandPosts, getAllMemberPosts } from 'lib/api/community';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types
import { IPost } from 'types';

// tmp dump datas
import dumpdata from './dump.json';

interface Props {}

function Community(props: Props): React.ReactElement {
  const [teamFlag, setTeamFlag] = useState<number>(0);
  const [tabsIdx, setTabsIdx] = useState<number>(0);
  const [posts, setPosts] = useState(dumpdata);
  const [currPosts, setCurrPosts] = useState<IPost[] | null>(null);
  const [currTitle, setCurrTitle] = useState<string>('');
  const [currTags, setCurrTags] = useState([]);

  // constructor
  useEffect(() => {
    let newPosts;

  }, []);
  
  // current Posts filter
  useEffect(() => {
    if (!posts) return;

    let newCurrPosts: IPost[] = [...posts];

    // teamFlag index
    if (teamFlag === 0) {
      newCurrPosts = posts.filter(post => post.recruitStatus === 'T');
    } else {
      newCurrPosts = posts.filter(post => post.recruitStatus === 'M');
    }

    // tabs index
    if (tabsIdx === 1) {
      // proceeding
      newCurrPosts = newCurrPosts.filter(post => post.status === 'proceeding');
    } else if (tabsIdx === 2) {
      // done
      newCurrPosts = newCurrPosts.filter(post => post.status === 'done');
    }

    if (!currTitle && !currTags) {
      setCurrPosts(newCurrPosts);
    } else {
      // set current title
      if (currTitle) {
        newCurrPosts = newCurrPosts.filter(
          post => post.title.indexOf(currTitle) !== -1,
        );
      }

      // set current posts
      if (currTags) {
        newCurrPosts = newCurrPosts?.filter(post => {
          const _tags = post.tags;
          let tagFlag = true;
          for (const tag of currTags) {
            if (_tags.indexOf(tag) === -1) {
              tagFlag = false;
              break;
            }
          }
          return tagFlag;
        });
        setCurrPosts(newCurrPosts);
      }
    }
  }, [posts, teamFlag, tabsIdx, currTitle, currTags]);

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
    let newTeamFlag: number = 0;
    const ele0 = document.querySelector('.teamFlag-container > p:nth-child(1)');
    const ele1 = document.querySelector('.teamFlag-container > p:nth-child(2)');
    if (idx === 0) {
      newTeamFlag = 1;
      ele0?.setAttribute('class', 'teamFlag-active');
      ele1?.setAttribute('class', 'teamFlag');
    } else {
      newTeamFlag = 0;
      ele0?.setAttribute('class', 'teamFlag');
      ele1?.setAttribute('class', 'teamFlag-active');
    }
    setTeamFlag(newTeamFlag);
  };

  return (
    <Wrapper>
      <Header />
      <Container className="community-container">
        <Grid container className="sub-container">
          <Grid item xs={2} className="teamFlag-container">
            <p onClick={() => handleTeamFlag(0)} className="teamFlag-active">
              팀원 구하기
            </p>
            <p onClick={() => handleTeamFlag(1)} className="teamFlag">
              팀 구하기
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
              setCurrTitle={setCurrTitle}
              currTags={currTags}
              setCurrTags={setCurrTags}
            />
            <TagList currTags={currTags} setCurrTags={setCurrTags} />
            <div className="create-container">
              <Link to="/post">
                <button className="create-btn">글쓰기</button>
              </Link>
            </div>
            <Posts currPosts={currPosts} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Community;
