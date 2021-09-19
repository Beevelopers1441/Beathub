import React, { FC, useState, useEffect } from 'react';

// Components
import Posts from './Posts';
import LinkTab from './LinkTab';
import TagList from './TagList';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// types
import { IPost } from 'types';

// tmp dump datas
import dumpdata from './dump.json';
import CommunitySearch from './Search';

interface Props {}

const Community: FC<Props> = props => {
  const [leftbar, setLeftbar] = useState<number>(0);
  const [tabsIdx, setTabsIdx] = useState<number>(0);
  const [posts, setPosts] = useState(dumpdata);
  const [currPosts, setCurrPosts] = useState<IPost[] | null>(null);
  const [currTitle, setCurrTitle] = useState<string>('');
  const [currTags, setCurrTags] = useState([]);

  // current Posts filter
  useEffect(() => {
    if (!posts) return;

    let newCurrPosts: IPost[] = [...posts];

    // leftbar index
    if (leftbar === 0) {
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
        newCurrPosts = newCurrPosts.filter(post => post.title.indexOf(currTitle) !== -1);
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
  }, [posts, leftbar, tabsIdx, currTitle, currTags]);

  const handleLeftbar = (idx: number): void => {
    const newLeftbar: number = idx === 1 ? 0 : 1;
    setLeftbar(newLeftbar)
  };

  return (
    <Wrapper>
      <Container className="community-container">
        <Grid container>
          <Grid item xs={2}>
            <p onClick={() => handleLeftbar(0)} className="leftbar">팀 구하기</p>
            <p onClick={() => handleLeftbar(1)} className="leftbar">팀원 구하기</p>
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
            <Posts currPosts={currPosts} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Community;
