import {IArticleListState} from '../../containers/ArticleList';
import {ILoadingState} from '../../containers/Loading';

export interface IState {
  articles: IArticleListState;
  loading: ILoadingState;
}
