import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootState from './state';

export const history = createBrowserHistory();

function store (initialState = {}) {
  return createStore(
    rootState(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  );
}

export default store;
