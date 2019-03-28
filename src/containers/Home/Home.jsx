import PropTypes from 'prop-types';
import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import ArticleList from '../../components/ArticleList';
import Button from '../../components/Button';
import {fetchArticles} from '../../state/articles';

function Home ({articles, loadArticles, loading, loadMore, page}) {
  useEffect(() => {
    if (articles.length === 0) {
      loadArticles(page);
    }
  }, []);

  function loadNextPage () {
    const nextPage = page + 1;

    return loadArticles(nextPage);
  }

  return (
    <Fragment>
      <ArticleList articles={articles} loading={loading} link='/article' />

      {loadMore && <Button type='button' onClick={loadNextPage}>Load more articles</Button>}
    </Fragment>
  );
}

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      media: PropTypes.shape({
        source: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
          }).isRequired
        ).isRequired
      }).isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loadArticles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired
};

function mapStateToProps ({articles: {articles, loading, loadMore, page}}) {
  return {
    articles,
    loading,
    loadMore,
    page
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadArticles (page) {
      return dispatch(fetchArticles(page));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
