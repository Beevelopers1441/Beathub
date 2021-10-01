import React, { useEffect, useState }  from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Components
import { GroupProfileInfo, GroupProfileBoard } from 'components';

// styles
import { Container, Grid } from '@mui/material';
import Wrapper from './styles';

// apis
import { getGroupProfile } from 'lib/api/groupProfile';

// types
import { BandProfileInfo } from 'types';


interface MatchParam {
  groupId: string;
}


const GroupProfile: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {

  const [groupInfo, setGroupInfo] = useState<BandProfileInfo>({
    band: {
      id: 0,
      name: "",
      imageUrl: "",
      introduction: ""
    },
    leader: {
      id: 0,
      name: "",
      imageUrl: ""
    },
    members: [
      {
        id: 0,
        name: "",
        imageUrl: ""
      }
    ],
    followers: [],
    buckets: [],
    posts: []
  })

  // const [groupBoard, setGroupBoard] = useState({})

  // 서버에 요청해서 받아온 bandInfo를 groupInfo로 저장
  useEffect (() => {
    getGroupProfile(Number(match.params.groupId)).then(res => {
      const totalInfo = res.data
      setGroupInfo({
        band: totalInfo.band,
        leader: totalInfo.leader,
        members: totalInfo.members,
        followers: totalInfo.followers,
        buckets: totalInfo.buckets,
        posts: totalInfo.posts
      })
    })
  }, [match.params.groupId])

  return(
    <Wrapper>
      <Container className="group-profile-container">
        <Grid container>
          <Grid item xs={4}>
            <GroupProfileInfo bandInfo={groupInfo}></GroupProfileInfo>
          </Grid>
          <Grid item xs={8}>
            <GroupProfileBoard></GroupProfileBoard>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default GroupProfile;