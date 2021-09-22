import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community, UserProfile} from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
          <Route exact path="/profile/:id" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
