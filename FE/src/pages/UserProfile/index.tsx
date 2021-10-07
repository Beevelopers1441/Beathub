import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import { UserProfileInfo, UserProfileBoard } from 'components';

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

interface IProfile {
  profileInfo: ProfileInfo
}

const UserProfile: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {

  const refreshPage = useSelector((state: any) => state.user)

  // state 초기화
  // 유저 프로필 정보 탭에 필요한 정보
  const [profileInfo, setProfileInfo] = useState<IProfile["profileInfo"]>({
    id: 0,
    imageUrl: "",
    nickname: "",
    email: "",
    introduction: "",
    instruments: [{
      ability: "",
      instrument: ""
    }],
    participatingBands:[{
      id: 0,
      name: "",
      imageUrl: "",
      introduction: "",
      createTime: new Date(),
    }],
    followBands: [{
      id: 0,
      name: "",
      imageUrl: "",
      introduction: "",
      createTime: new Date(),
    }],
    buckets: [{
      id: 0,
      title: "",
      introduction: "",
      contributors: [],
      bpm: 0,
    }]
  });
  
  // const [profileBoard, setProfileBoard] = useState({})

  // 서버에 요청해서 받아온 userInfo를 profileInfo로 저장
  useEffect (() => {
    getUserProfile(Number(match.params.userId)).then(res => {
      const totalInfo = res.data
      setProfileInfo({
        id: totalInfo.id,
        nickname: totalInfo.name,
        email: totalInfo.email,
        imageUrl: totalInfo.imageUrl,
        introduction: totalInfo.introduction,
        instruments: totalInfo.instruments,
        participatingBands: totalInfo.participatingBands,
        followBands: totalInfo.followBands,
        buckets: totalInfo.buckets,
      })
    })
  }, [match.params.userId, refreshPage])
  
  return(
    <Wrapper>
      <Container className="user-profile-container">
          <Grid item xs={3} className="container">
            <UserProfileInfo profileInfo={profileInfo}></UserProfileInfo>
          </Grid>
          <Grid item xs={9} className="container">
            <UserProfileBoard profileInfo={profileInfo}></UserProfileBoard>
          </Grid>
      </Container>
    </Wrapper>
  )
}

export default UserProfile;