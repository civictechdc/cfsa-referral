import React from 'react';
import Home from  'Home';
import About from 'About';
import Login from 'Login';
import Contact from 'Contact';
import Linkbar from 'Linkbar';
import QualifiedPrograms from 'QualifiedPrograms';



import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import answers from 'reducers/answers';
import data from 'reducers/data';
import auth from 'reducers/auth';
import eligiblePrograms from 'reducers/eligiblePrograms';
import 'bootstrap/dist/css/bootstrap.css';

import logger from 'redux-logger';
import thunk from 'redux-thunk'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
// Build middleware implementation, including logger if not test or production
const mWare = process.env.NODE_ENV === 'development' ?  applyMiddleware(middleware, thunk, logger) : applyMiddleware(middleware, thunk)
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    answers,
    auth,
    data,
    eligiblePrograms,
    routing: routerReducer
  }),
  mWare
)

const App = () => {
  return (
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Linkbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/QualifiedPrograms" component={QualifiedPrograms} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
