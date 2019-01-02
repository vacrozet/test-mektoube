import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import pageLogin from './route/pageLogin.js'
import connexion from './Store/Reducers/favoriteReducer'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from './Saga/saga'

class Index extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/' component={pageLogin} />
        </Switch>
      </div>
    )
  }
}

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(connexion, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <Route component={Index} />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
