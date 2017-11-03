import React from 'react';

import Home from  'Home';
import About from 'About';
import Login from 'Login';
import PrivateRoute from 'PrivateRoute';
import Contact from 'Contact';
import Linkbar from 'Linkbar';
import QualifiedPrograms from 'QualifiedPrograms';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import history from './history';
import createHistory from 'history/createBrowserHistory'
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import answers from 'reducers/answers';
import data from 'reducers/data';
import auth from 'reducers/auth';
import eligiblePrograms from 'reducers/eligiblePrograms';

import 'bootstrap/dist/css/bootstrap.css';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

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
            <PrivateRoute exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/qualifiedprograms" component={QualifiedPrograms} />
            <Redirect to="/" />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
