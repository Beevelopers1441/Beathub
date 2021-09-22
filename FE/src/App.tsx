import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, Auth, Community, PostDetail, PostCreate } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/post" component={PostCreate} />
          <Route exact path="/post/:postId" component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
