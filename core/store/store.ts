import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {articleListReducer} from '../../containers/ArticleList';
import {loadingReducer} from '../../containers/Loading';

export const store = createStore(
  combineReducers({
    articleList: articleListReducer,
    loading: loadingReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);

export function initStore () {
  return store;
}
