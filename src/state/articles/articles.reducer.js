import {ArticlesActionTypes} from './articles.actions';

export const initialState = {
  articles: [],
  loading: false,
  loadMore: true,
  page: 1
};

export function articlesReducer (state = initialState, actions) {
  switch (actions.type) {
  case ArticlesActionTypes.COMPLETE: {
    const articles = [
      ...state.articles,
      ...actions.payload.articles
    ];

    return {
      articles,
      loading: false,
      loadMore: actions.payload.loadMore,
      page: actions.payload.page
    };
  }
  case ArticlesActionTypes.ERROR:
    return {
      ...state,
      loading: false
    };
  case ArticlesActionTypes.FETCH:
    return {
      ...state,
      loading: true
    };
  default:
    return state;
  }
}
