import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Components
import UserProfileInfo from 'components/UserProfileInfo';
import UserProfileBoard from 'components/UserProfileBoard';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// apis
import { getUserProfile } from 'lib/api/userProfile'

// types
import { ProfileInfo } from 'types';

interface MatchParam {
  userId: string;
}

const UserProfile: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {

  // state 초기화
  // 유저 프로필 정보 탭에 필요한 정보
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    imageUrl: "",
    nickname: "",
    instruments: [],
    followers: [],
    followings: [],
    leadingBands: [],
    participatingBands:[]
  });
  // const [profileBoard, setProfileBoard] = useState({})

  // 서버에 요청해서 받아온 userInfo를 profileInfo로 저장
  useEffect (() => {
    getUserProfile(Number(match.params.userId)).then(res => {
      const totalInfo = res.data
      setProfileInfo({
        imageUrl: totalInfo.imageUrl,
        nickname: totalInfo.name,
        instruments: totalInfo.instruments,
        followers: totalInfo.followers,
        followings: totalInfo.followings,
        leadingBands: totalInfo.leadingBands,
        participatingBands: totalInfo.participatingBands
      })
    })
  })

  return(
    <Wrapper>
      <Container className="user-profile-container">
        <Grid container>
          <Grid item xs={4}>
            <UserProfileInfo profileInfo={profileInfo}></UserProfileInfo>
          </Grid>
          <Grid item xs={8}>
            <UserProfileBoard></UserProfileBoard>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default UserProfile;