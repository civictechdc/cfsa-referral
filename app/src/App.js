import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from  './Home';
import About from './About';
import Contact from './Contact';
import Linkbar from './Linkbar';

import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const App = () => {
  return (
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Linkbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
