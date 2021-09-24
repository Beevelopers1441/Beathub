import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, UserProfile, Community, PostDetail, PostCreate} from 'pages';
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
          <Route exact path="/profile/:id" component={UserProfile} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/post" component={PostCreate} />
          <Route exact path="/post/:postId" component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
