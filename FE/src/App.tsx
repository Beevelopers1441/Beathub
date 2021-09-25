import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, UserProfile, Community, PostDetail, PostCreate} from 'pages';
import { Chat, Header } from 'components';

// 로그인으로 받은 토큰으로 사용자 정보 가져오기
import GetUserInfo from 'components/SocialAuth/GetUserInfo/index';

function App() {

  GetUserInfo()

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Chat />
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/profile/:id" component={UserProfile} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/post" component={PostCreate} />
          <Route exact path="/post/:postId" component={PostDetail} />
          {/* 위 규칙을 벗어나면 루트 요청으로 리다이렉트 */}
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
