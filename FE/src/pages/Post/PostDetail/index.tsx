import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// Component
import { TagListReadOnly } from 'components';
import { Comment, ProfileCard } from 'components/Community';

// types
import { IPost, IComment } from 'types';

// styles
import { Container, Grid } from '@mui/material';
import { ArrowBackIosNew, Favorite, FavoriteBorder } from '@mui/icons-material';
import Wrapper from './styles';

function PostDetail(): React.ReactElement {
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLike, setIsLike] = useState<Boolean>(false);

  const { state } = useLocation<any>();
  const history = useHistory();

  // update current post info
  useEffect(() => {
    if (!state) return;

    const newPost = state.post;
    const newComments = state.post.comments;
    setPost(newPost);
    setComments(newComments)
  }, [state]);

  // likes
  const handleLike = () => {
    const newPost = JSON.parse(JSON.stringify(post))
    if (isLike) {
      newPost.likes -= 1
    } else {
      newPost.likes += 1
    }
    setPost(newPost)
    setIsLike(!isLike)
  }

  const handleBack = () => {
    history.goBack();
  }

  return (
    <Wrapper>
      <Container>
        { !post ? (
          <p>존재하지 않는 게시물입니다.</p>
        ) : (
          <Grid container>
            <Grid item xs={1}>
              <ArrowBackIosNew onClick={handleBack} className="back-btn"/>
            </Grid>
            <Grid item xs={10} className="content-container">
              <p className="title">{post.title}</p>
              <div className="time-like-container">
                <p className="time">{post.created_at}</p>
                { isLike ? (
                  <Favorite onClick={handleLike} className="likes-icon-active" />
                ) : (
                  <FavoriteBorder onClick={handleLike} className="likes-icon-inactive" />
                )}
                <p className="likes">{post.likes}</p>
              </div>
              <div className="tag-container">
                <TagListReadOnly tags={post.tags} />
              </div>
              <p className="content">{post.content}</p>
              <div className="comments-container">
                <div className="comments-header-container">
                  <p className="comments-length">{comments.length}개의 댓글</p>
                  <button className="comment-btn">댓글 등록</button> 
                </div>
                <textarea className="comment-input" placeholder="댓글을 작성하세요." />
                { comments.map((comment, idx) => <Comment comment={comment} key={idx} />)}
              </div>
            </Grid>
            <Grid item xs={1}>
              <ProfileCard name={post.userInfo.name} imageUrl={post.userInfo.imageUrl}/>
            </Grid>
          </Grid>
        )}
      </Container>
    </Wrapper>
  );
}

export default PostDetail;
