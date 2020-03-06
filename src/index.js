import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './components/reducer';


const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
<Router>
  <Provider store = {store}>
  <App />
  </Provider>
</Router>, document.getElementById('root'));