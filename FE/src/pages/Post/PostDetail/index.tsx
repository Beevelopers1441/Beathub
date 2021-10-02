import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// Component
import { Comment, ProfileCard } from 'components/Community';
import InstItem from 'components/atoms/InstItem';

// apis
import { getMemberPost, getBandPost, setComment, setLikeAPI, setUnlikeAPI } from 'lib/api/community';
import { setDateFormat } from 'utils/time';

// types
import { IPost, IComment } from 'types';

// styles
import { Container, Grid } from '@mui/material';
import { ArrowBackIosNew, Favorite, FavoriteBorder } from '@mui/icons-material';
import Wrapper from './styles';

interface ParamTypes {
  postId: string;
}

function PostDetail(): React.ReactElement {
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLike, setIsLike] = useState<Boolean>(false);
  const [likeCnt, setLikeCnt] = useState<number>(0);

  const { userInfo } = useSelector((state: any) => state.user);
  const { postId } = useParams<ParamTypes>();
  const { state } = useLocation<any>();
  const history = useHistory();
  const commentRef: any = useRef();

  // update current post info
  useEffect(() => {
    if (!state) return;

    const teamFlag = state.teamFlag;
    if (teamFlag === 0) {
      // 개인 글
      getMemberPost(+postId).then(res => {
        const newPost = res.data;
        const newComments = newPost.comments;
        const newLikeCnt = newPost.likeUsers.length;
        const newIsLike = newPost.likeUsers.filter((p: IPost) => p.id === userInfo.id).length === 0 ? false : true;
        setLikeCnt(newLikeCnt); 
        setIsLike(newIsLike);
        setPost(newPost);
        setComments(newComments);
      });
    } else {
      // 밴드 글
      getBandPost(+postId).then(res => {
        const newPost = res.data;
        const newComments = newPost.comments;
        const newLikeCnt = newPost.likeUsers.length;
        setLikeCnt(newLikeCnt);
        setPost(newPost);
        setComments(newComments);
      });
    }
  }, [postId, state, userInfo.id]);

  // likes
  const handleLike = () => {
    const _postId: number = post ? post.id : 0;
    if (_postId === 0) return

    if (isLike) {  // like 취소
      setLikeCnt(likeCnt - 1);
      setUnlikeAPI(_postId);
    } else {  // like 등록
      setLikeCnt(likeCnt + 1);
      setLikeAPI(_postId);
    }
    setIsLike(!isLike);
  };

  // comment
  const handleComment = () => {
    const currContent = commentRef.current.value;
    setComment(+postId, currContent)
      .then(res => {
        const newComment = res.data;
        const newComments = [...comments];
        newComments.push(newComment);
        setComments(newComments);
      })
    
  };

  const handleBack = () => {
    history.goBack();
  };

  // need to change tmp
  useEffect(() => {
    if (!post) return
  }, [post])

  return (
    <Wrapper>
      <Container>
        {!post ? (
          <p>존재하지 않는 게시물입니다.</p>
        ) : (
          <Grid container>
            <Grid item xs={1}>
              <ArrowBackIosNew onClick={handleBack} className="back-btn" />
            </Grid>
            <Grid item xs={10} className="content-container">
              <p className="title">{post.title}</p>
              <div className="time-like-container">
                <p className="time">{setDateFormat(post.createTime)}</p>
                {isLike ? (
                  <Favorite
                    onClick={handleLike}
                    className="likes-icon-active"
                  />
                ) : (
                  <FavoriteBorder
                    onClick={handleLike}
                    className="likes-icon-inactive"
                  />
                )}
                <p className="likes">{likeCnt}</p>
              </div>
              <div className="tag-container">
                <InstItem inst={post?.tag.type} />
              </div>
              <p className="content">{post.content}</p>
              <div className="comments-container">
                <div className="comments-header-container">
                  <p className="comments-length">{comments.length}개의 댓글</p>
                  <button onClick={handleComment} className="comment-btn">
                    댓글 등록
                  </button>
                </div>
                <textarea
                  ref={commentRef}
                  className="comment-input"
                  placeholder="댓글을 작성하세요."
                />
                {comments.map((comment, idx) => (
                  <Comment comment={comment} key={idx} />
                ))}
              </div>
            </Grid>
            <Grid item xs={1}>
              <ProfileCard
                name={post.author.name}
                imageUrl={post.author.imageUrl}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Wrapper>
  );
}

export default PostDetail;
