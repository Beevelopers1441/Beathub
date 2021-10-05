import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FollowBtn from './FollowBtn';
import Followers from './Followers';
import DMBtn from '../DMBtn';

import Wrapper from './styles';
import { Grid } from '@mui/material';

// api
import { followGroup, unFollowGroup, getGroupFollowList } from 'lib/api/groupProfile';

interface Props {
  id: number,
}

const Follow: React.FC<Props> = ({ id }) => {

  const userId = useSelector((state: any) => state.user.userInfo.id)

  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const [followersList, setFollowersList] = useState([])

  // 팔로워 목록 초기화
  useEffect(() => {
    // 새로고침 시 잠시 id가 0이 되는 현상 때문
    if(id !== 0) {
      FetchFollowList(id)
    }
  }, [id])

  // 이 밴드를 팔로우하고 있는지 판단
  useEffect(() => {
      followersList.forEach(follower => {
        if (userId === follower["id"]) {
          setIsFollowing(true)
        }
      })
  }, [userId, followersList])

  // 팔로워 목록을 가져오는 함수
  const FetchFollowList = (id: number) => {
    getGroupFollowList(id)
    .then(res => {
      setFollowersList(res.data)
    })
  }

  // 팔로우 버튼 클릭
  const onClickFollow = () => {
    followGroup(id)
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
    unFollowGroup(id)
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
          <DMBtn id={id}></DMBtn>
        </Grid>
      </Grid>
      <Followers followers={followersList}></Followers>
    </Wrapper>
  )
}

export default Follow;