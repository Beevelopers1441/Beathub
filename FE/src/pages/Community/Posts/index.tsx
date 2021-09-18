import React, { useState, useEffect } from 'react';

// Components
import Post from './Post';

// types
import { IPost } from 'types';

// styles
import Wrapper from './styles';


interface Props {
  tabsIdx: number;
  posts: IPost[]
}

function Posts({ tabsIdx, posts }: Props): React.ReactElement {
  const [currPosts, setCurrPosts] = useState<IPost[] | null | undefined>(null);

  useEffect(() => {
    if (!posts) return

    let newCurrPosts: IPost[] = posts;
    if (tabsIdx === 1) {  // proceeding
      newCurrPosts = posts.filter(post => post.status === 'proceeding');
    } else if (tabsIdx === 2) {  // done
      newCurrPosts = posts.filter(post => post.status === 'done');
    }
    setCurrPosts(newCurrPosts);
  }, [posts, tabsIdx]);

  return (
    <Wrapper>
      {currPosts ? (
        currPosts.map(post => (
          <Post post={post} />
        ))
      ) : (
        <p>없습니다.</p>
      )
     }
    </Wrapper>
  )
};

export default Posts;
