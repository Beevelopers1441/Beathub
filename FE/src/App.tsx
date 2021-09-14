import GlobalStyle from './styles/GlobalStyle'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
