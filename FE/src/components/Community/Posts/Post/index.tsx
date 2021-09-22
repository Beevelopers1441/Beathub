import React from 'react';

// types
import { IPost } from 'types';

// styles
import Wrapper from './styles';

interface Props {
  post: IPost;
}

function Post({ post }: Props): React.ReactElement {

  return (
    <Wrapper>
      <p>제목: {post.title}</p>
      <p>내용: {post.content}</p>
      <p>tags: {post.tags}</p>
      <p>status: {post.status}</p>

    </Wrapper>
  )
};

export default Post;
