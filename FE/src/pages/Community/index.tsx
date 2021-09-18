import React, { FC, useState } from 'react';

// Components
import Posts from './Posts';
import LinkTab from './LinkTab';

// styles
import { Container, Grid } from '@material-ui/core';
import Wrapper from './styles';

// tmp dump datas
import dumpdata from './dump.json';

interface Props {}

const Community: FC<Props> = props => {
  const [tabsIdx, setTabsIdx] = useState(0);
  const [posts, setPosts] = useState(dumpdata);

  return (
    <Wrapper>
      <Container className="community-container">
        <Grid container>
          <Grid item xs={2}>
            <p>팀 구하기</p>
            <p>팀원 구하기</p>
          </Grid>
          <Grid item xs={10}>
            <div className="linktab-container">
              {[0, 1, 2].map(value => {
                return <LinkTab setTabsIdx={setTabsIdx} tabsIdx={value} key={value}/>;
              })}
            </div>
            <Posts tabsIdx={tabsIdx} posts={posts} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Community;
