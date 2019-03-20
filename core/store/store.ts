import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {loadingReducer} from '../../containers/Loading';

export function initStore (initialState: any) {
  return createStore(
    combineReducers({
      loadingReducer
    }),
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  );
}
