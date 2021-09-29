import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Login, Signup, UserProfile, Beathub, GroupProfile, Community, PostDetail, PostCreate} from 'pages';
import { Chat, Header } from 'components';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Chat />
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
<<<<<<< HEAD
=======
          <Route exact path="/profile/:userId" component={UserProfile} />
          <Route exact path="/group-profile/:groupId" component={GroupProfile} />
>>>>>>> 53a892f9c45aa418f89549e33bbc77ecaff34a75
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:userId" component={UserProfile} />
          <Route exact path="/Beathub" component={Beathub} />
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
