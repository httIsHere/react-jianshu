import React, { Component, Fragment } from 'react';
import './assets/style/App';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

import Header from './components/header'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
