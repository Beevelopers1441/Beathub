import React from 'react';
import { useHistory } from 'react-router-dom';

// component
import { ProfileImage } from 'components/atoms';

// types
import { IPost } from 'types';

// styles
import { Grid } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  post: IPost;
}

function Post({ post }: Props): React.ReactElement {
  const history = useHistory();

  const handlePostDetail = (postId: number) => {
    const location = { 
      pathname: `/post/${postId}`,
      state: { post, }
    };
    history.push(location);
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={10}
          className="mainInfo-box"
          onClick={() => handlePostDetail(post.id)}
        >
          <Grid container>
            <Grid item xs={9}
              className="post-mainInfo-container"
            >
              <p className="title">{post.title}</p>
              <p className="content">{post.content}</p>
              <p className="tags">{post.tags.map(tag => `#${tag} `)}</p>
            </Grid>
            <Grid item xs={3}
              className="post-subInfo-container"
            >
              <p className="comment">{post.comments.length}개의 댓글</p>
              <div className="time-likes-container">
                <p className="time">{post.created_at}</p>
                <div className="likes-container">
                  <Favorite className="likes-icon"/>
                  <p>{post.likes}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}
          className="user-container"
        >
          <p className="user-name">{post.userInfo.name}</p>
          <ProfileImage url={post.userInfo.imageUrl} />
        </Grid>
      </Grid>
      
      {/* <p>status: {post.status}</p>
      <p>recruitStatus: {post.recruitStatus}</p> */}


    </Wrapper>
  )
};

export default Post;
