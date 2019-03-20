import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {loadingReducer} from '../../containers/Loading';

export function initStore () {
  return createStore(
    combineReducers({
      loading: loadingReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  );
}
