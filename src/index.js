import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
// import { configureStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers/index'
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk))
// const store = configureStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
