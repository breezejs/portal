import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {articlesReducer} from './articles';

function rootState (history) {
  return combineReducers({
    articles: articlesReducer,
    router: connectRouter(history)
  });
}

export default rootState;
