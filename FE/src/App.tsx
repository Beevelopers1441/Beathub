import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community, Post } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
          <Route exact path="/post/:postId" component={Post} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
