import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

// utils
import { setDateFormat } from 'utils/time';
import { setSimpleUsername, setSliceText } from 'utils/community';

// component
import { ProfileImage } from 'components/atoms';

// types
import { IPost } from 'types';

// styles
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';
import { Grid, Tooltip } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Wrapper from './styles';

interface Props {
  post: IPost;
  teamFlag: number;
}

function Post({ post, teamFlag }: Props): React.ReactElement {
  const [isLike, setIsLike] = useState<boolean>(false);
  const history = useHistory();
  const { userInfo } = useSelector((state: any) => state.user);

  // handle like
  useEffect(() => {
    if (!post) return
    
    const flag = post.likeUsers.filter((u => u.id === userInfo.id));
    if (flag.length === 0) {  // like 유저에 없음
      setIsLike(false);
    } else { // like 유저에 있음
      setIsLike(true);
    };
  }, [post, userInfo.id]);

  const handlePostDetail = (postId: number) => {
    const location = { 
      pathname: `/posts/${postId}`,
      state: { teamFlag, }
    };
    history.push(location);
  };

  // user profile 클릭 시 프로필 이동
  const handleProfile = (id: number) => {
    if (teamFlag === 0) {
      history.push(`/profile/${id}`);
    } else {
      history.push(`/group-profile/${id}`);
    };
  };

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
                  { isLike ? (
                    <Favorite className="likes-icon likes-icon-active"/>
                  ) : (
                    <FavoriteBorder className="likes-icon"/>
                  )}
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
          <div 
            className="profile-image-container"
            onClick={() => handleProfile(post.author.id)}
          >
            <ProfileImage
              url={post.author.imageUrl ? post.author.imageUrl : defaultProfileImg}
              className={'user-image'}
            />
          </div>
        </Grid>
      </Grid>
      
      {/* <p>status: {post.status}</p>
      <p>recruitStatus: {post.recruitStatus}</p> */}


    </Wrapper>
  )
};

export default Post;
