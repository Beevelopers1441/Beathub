import React from 'react'
import { useHistory } from 'react-router-dom';
// Components
// import { Posts, LinkTab, TagList, CommunitySearch } from 'components/Community';

// styles
import { Container, Grid, Chip } from '@mui/material';
import Wrapper from './styles';

// redux
import { useSelector } from 'react-redux';

function SignUp(): React.ReactElement {
  const history = useHistory();
  
  // 유저정보 리덕스에서 가져오기
  const userid = useSelector((state: any) => state.user.userInfo.id)

  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={1} sm={2} md={4}></Grid>
          <Grid item xs={10} sm={8} md={4} className="login-container">
            <div className="modal-container">
              <div>
                <h3>연주하는 악기가 있으신가요?</h3>
                <p>처음이시라면 프로필을 설정해보세요!</p>
                <button className="btn-profile" onClick={() => history.push(`/profile/${userid}`)} >프로필 설정하러 가기</button>
              </div>
              <div>
                <h3>팀이나 팀원을 구하고 계신가요?</h3>
                <p>처음이시라면 팀을 구해보세요!</p>
                <button className="btn-team" onClick={()=>history.push('/community')} >팀/팀원 구하러 하기</button>
              </div>
            </div>
            <div className="chip-container">
              <Chip className="chip-home" label="홈으로 가기" onClick={()=>history.push('/')}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default SignUp;