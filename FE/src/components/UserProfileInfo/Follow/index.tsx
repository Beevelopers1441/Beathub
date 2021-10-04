import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FollowBtn from './FollowBtn';
import Followers from './Followers';
import Followings from './Followings';
import DMBtn from '../DMBtn';

import Wrapper from './styles';
import { Grid } from '@mui/material';

// api
import { followUser, unFollowUser, getFollowList } from 'lib/api/userProfile';

interface Props {
  id: number,
}

const Follow: React.FC<Props> = ({ id }) => {

  const userId = useSelector((state: any) => state.user.userInfo.id)

  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const [followersList, setFollowersList] = useState([])
  const [followingsList, setFollowingsList] = useState([])

  // 팔로워, 팔로잉 목록 초기화
  useEffect(() => {
    // 새로고침 시 잠시 id가 0이 되는 현상 때문
    if(id !== 0) {
      FetchFollowList(id)
    }
  }, [id])

  // 이 사람을 팔로우하고 있는지 판단
  useEffect(() => {
    followersList.forEach(follower => {
      if (userId === follower["user"]["id"]) {
        setIsFollowing(true)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, followersList])

  // 팔로잉, 팔로워 목록을 가져오는 함수
  const FetchFollowList = (id: number) => {
    getFollowList(id)
    .then(res => {
      setFollowersList(res.data.followers)
      setFollowingsList(res.data.followings)
    })
  }

  // 팔로우 버튼 클릭
  const onClickFollow = () => {
    followUser(id)
    .then((res) => {
      console.log(res)
      FetchFollowList(id)
      setIsFollowing(true)
    })
    .catch((err) => {
      console.log(err)
    })    
  }

  // 언팔로우 버튼 클릭
  const onClickUnfollow = () => {
    unFollowUser(id)
    .then((res) => {
      console.log(res)
      FetchFollowList(id)
      setIsFollowing(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <Wrapper>
      { id !== userId &&
        <Grid container>
          <Grid item xs={10}>
            <FollowBtn 
              isFollowing={isFollowing}
              onClickFollow={onClickFollow}
              onClickUnfollow={onClickUnfollow}
              >
            </FollowBtn>
          </Grid>
          <Grid item xs={2}>
            <DMBtn></DMBtn>
          </Grid>
        </Grid>
      }
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4}>
          <Followers followers={followersList}></Followers>
        </Grid>
        <Grid item xs={4}>
          <Followings followings={followingsList}></Followings>
        </Grid>
      </Grid> 
    </Wrapper>
  )
}

export default Follow;