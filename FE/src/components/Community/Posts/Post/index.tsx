import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// utils
import { setDateFormat } from 'utils/time';
import { setSimpleUsername, setSliceText } from 'utils/community';

// component
import { ProfileImage } from 'components/atoms';

// types
import { IPost } from 'types';

// styles
import { Grid, Tooltip } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  post: IPost;
  teamFlag: number;
}

function Post({ post, teamFlag }: Props): React.ReactElement {
  const history = useHistory();

  const handlePostDetail = (postId: number) => {
    const location = { 
      pathname: `/posts/${postId}`,
      state: { teamFlag, }
    };
    history.push(location);
  }

  useEffect(() => {
    console.log(post)
  }, [])

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
              <p className="title">{setSliceText('title', post.title)}<span className="post-tag">{post.tag.type}</span></p>
              <p className="content">{setSliceText('content', post.content)}</p>
            </Grid>
            <Grid item xs={3}
              className="post-subInfo-container"
            >
              <p className="comment">{post.comments.length}개의 댓글</p>
              <div className="time-likes-container">
                <p className="time">{setDateFormat(post.createTime)}</p>
                <div className="likes-container">
                  <Favorite className="likes-icon"/>
                  <p>{post.likeUsers.length}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}
          className="user-container"
        >
          <Tooltip 
            title={post.author.name}
            arrow
            placement="top"
            className="name-tooltip"
          >
            <p className="user-name">{setSimpleUsername(post.author.name)}</p>
          </Tooltip>
          <ProfileImage
            url={post.author.imageUrl}
            className={'user-image'} />
        </Grid>
      </Grid>
      
      {/* <p>status: {post.status}</p>
      <p>recruitStatus: {post.recruitStatus}</p> */}


    </Wrapper>
  )
};

export default Post;
