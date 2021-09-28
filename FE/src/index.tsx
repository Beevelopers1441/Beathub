import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import { Provider } from 'react-redux';
import rootReducer from './modules';


import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
