import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community, PostDetail, PostCreate } from 'pages';
import { ChatBtn } from 'components/Chat';

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatBtn />
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
          <Route exact path="/post" component={PostCreate} />
          <Route exact path="/post/:postId" component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
