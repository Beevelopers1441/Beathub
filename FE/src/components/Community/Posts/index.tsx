import React from 'react';

// Components
import Post from './Post';

// types
import { IPost } from 'types';

// styles
import Wrapper from './styles';


interface Props {
  currPosts: IPost[] | null;
}

function Posts({ currPosts }: Props): React.ReactElement {

  return (
    <Wrapper>
      {currPosts ? (
        currPosts.map((post, idx) => (
          <Post post={post} key={idx} />
        ))
      ) : (
        <p>작성된 글이 없습니다.</p>
      )
     }
    </Wrapper>
  )
};

export default Posts;
