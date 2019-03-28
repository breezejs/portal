import axios from 'axios';

export const ArticlesActionTypes = {
  COMPLETE: '[Articles] Complete',
  ERROR: '[Articles] Error',
  FETCH: '[Articles] Fetch'
};

export function fetchArticles (page) {
  return async (dispatch) => {
    dispatch({
      type: ArticlesActionTypes.FETCH
    });

    try {
      const {data: {items, pages}} = await axios.get('/api/v1/articles', {
        params: {
          page
        }
      });
      const loadMore = page !== pages;

      dispatch({
        payload: {
          articles: items,
          loadMore,
          page
        },
        type: ArticlesActionTypes.COMPLETE
      });
    } catch (e) {
      dispatch({
        payload: {
          message: e.message
        },
        type: ArticlesActionTypes.ERROR
      });
    }
  }
}
