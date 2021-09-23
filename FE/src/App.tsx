import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, UserProfile, Community, PostDetail, PostCreate} from 'pages';
import { ChatWrapper } from 'components';

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatWrapper />
      <BrowserRouter>
        <Switch>
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
