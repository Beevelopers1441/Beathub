import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

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

  // state 초기화
  // 유저 프로필 정보 탭에 필요한 정보
  const [profileInfo, setProfileInfo] = useState<IProfile["profileInfo"]>({
    imageUrl: "",
    nickname: "",
    introduction: "",
    instruments: [{
      id: 0,
      model: "",
      ability: "",
      player: {
        id: 0,
        name: "",
        imageUrl: ""
      },
      instrument: {
        id: 0,
        type: ""
      }
    }],
    followers: [{}],
    followings: [{}],
    leadingBands: [{}],
    participatingBands:[{}]
  });
  // const [profileBoard, setProfileBoard] = useState({})

  // 서버에 요청해서 받아온 userInfo를 profileInfo로 저장
  useEffect (() => {
    getUserProfile(Number(match.params.userId)).then(res => {
      const totalInfo = res.data
      setProfileInfo({
        imageUrl: totalInfo.imageUrl,
        nickname: totalInfo.name,
        introduction: totalInfo.introduction,
        instruments: totalInfo.instruments,
        followers: totalInfo.followers,
        followings: totalInfo.followings,
        leadingBands: totalInfo.leadingBands,
        participatingBands: totalInfo.participatingBands
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
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