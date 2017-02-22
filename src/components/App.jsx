import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import '../styles/dark.css';

import Routes from '../Routes';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
};
