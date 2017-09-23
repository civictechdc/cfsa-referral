import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from  './Home';
import Polyglot from 'node-polyglot';


import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import answers from './reducers/answers';
import data from './reducers/data';
import eligiblePrograms from './reducers/eligiblePrograms';
import 'bootstrap/dist/css/bootstrap.css';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)



// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    answers,
    data,
    eligiblePrograms,
    routing: routerReducer
  }),
  applyMiddleware(middleware, thunk, logger)
)

const App = () => {
  return (
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
