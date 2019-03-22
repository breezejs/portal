import {ArticleListActionTypes, IArticleListActions} from './ArticleList.actions';
import {IArticleListState} from './ArticleList.state';

export const initialState: IArticleListState = {
  articles: [],
  loading: false
};

export function articleListReducer (state = initialState, action: IArticleListActions) {
  switch (action.type) {
    case ArticleListActionTypes.Next:
    case ArticleListActionTypes.Start:
      return {
        ...state,
        loading: true
      };
    case ArticleListActionTypes.Success:
      const articles = state.articles;

      articles.push(action.payload.articles);

      return {
        articles,
        loading: false
      };
    default:
      return state;
  }
}
