import GlobalStyle from './styles/GlobalStyle'

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUserInfoAction, getTokenAction, loginAction } from 'modules/user/actions';
import { getUserInfo } from 'lib/api/auth/socialLogin'

import { Home, Login, Signup, UserProfile, Beathub, BeathubCreate, GroupProfile, Community, PostDetail, PostCreate, Search} from 'pages';
import { Chat, Header } from 'components';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.user.userInfo)


  // 새로고침 해도 로그인을 유지
  // 로컬 스토리지에는 저장되어 있으나, 새로고침 등의 이유로 인해 isLoggedIn이 false인 경우 생각
  if(localStorage.getItem("isLoggedIn") === "true" && isLoggedIn !== true) {
    dispatch(loginAction()); // 로그인 처리
    const token = localStorage.getItem("userToken") // 로컬스토리지 토큰 가져오기

    if (token !== null) {
      getUserInfo(token).then(res => {
        dispatch(getUserInfoAction({ userinfo: res.data })) // 리덕스: userInfo에 정보 담아주기
        dispatch(getTokenAction({token: token})) // 리덕스: 토큰 정보 담아주기
      })
    }
    
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Chat />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:userId" component={UserProfile} />
          <Route exact path="/group-profile/:groupId" component={GroupProfile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Beathub" component={BeathubCreate} />
          <Route exact path="/Beathub/:bucketId" component={Beathub} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/post/:propTeamFlag" component={PostCreate} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/search" component={Search} />
          {/* 위 규칙을 벗어나면 루트 요청으로 리다이렉트 */}
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
