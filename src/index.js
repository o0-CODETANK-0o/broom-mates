import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
