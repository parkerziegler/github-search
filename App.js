import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './index';
import Main from './Main';

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
