import axios from 'axios';
import {Dispatch} from 'redux';
import {store} from '../../core/store';
import {IArticleList} from './ArticleList.state';

export interface IArticleListActions {
  payload: {
    [name: string]: any;
  };
  type: ArticleListActionTypes;
}

export enum ArticleListActionTypes {
  Next = '[Article list] Next',
  Start = '[Article list] Start',
  Success = '[Article list] Success'
}

export function loadArticles () {
  store.dispatch(articleListStart());

  return async (dispatch: Dispatch) => {
    try {
      const {data} = await axios.get('/api/v1/articles', {
        params: {
          fields: 'article.content,article.title,article.id,media.source'
        }
      });

      dispatch(articleListSuccess(data.items));
    } catch (e) {
      // TODO: Error handling
    }
  };
}

export function articleListNext (page: number) {
  return {
    payload: {
      page
    },
    type: ArticleListActionTypes.Next
  };
}

export function articleListStart () {
  return {
    type: ArticleListActionTypes.Start
  };
}

export function articleListSuccess (articles: IArticleList) {
  return {
    payload: {
      articles
    },
    type: ArticleListActionTypes.Success
  };
}
