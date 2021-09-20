import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// types
import { IPost } from 'types';

// styles
import { Grid } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  post: IPost;
}

function Post({ post }: Props): React.ReactElement {
  const history = useHistory();

  // imageUrl tmp
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    console.log('???')
    const request = async () => {
      const res = await fetch(post.userInfo.imageUrl, {
        method: 'GET'
      })
      const data = await res.json()
      const _imageUrl = data[0].url;
      setImageUrl(_imageUrl)
    }
    request()
  }, [post])

  const handlePostDetail = (postId: number) => {
    const location = { pathname: `/post/${postId}`};
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
          <img 
            src={imageUrl}
            alt="img"
            className="user-image"
          />
        </Grid>
      </Grid>
      
      {/* <p>status: {post.status}</p>
      <p>recruitStatus: {post.recruitStatus}</p> */}


    </Wrapper>
  )
};

export default Post;
