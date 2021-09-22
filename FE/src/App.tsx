import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community, Auth } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
