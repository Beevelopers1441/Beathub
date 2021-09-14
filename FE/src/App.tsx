import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Community } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/community" component={Community} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
