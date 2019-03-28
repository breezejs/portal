import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../Grid';
import GridCol from '../GridCol';
import Tile from '../Tile';
import Typography from '../Typography';

function ArticleList ({articles, link, loading}) {
  const articleList = articles.map(({content, id, media: {source}, title}) => {
    const {path} = source.find(({name}) => name === 'thumbnail');

    return (
      <GridCol key={id} sm={6} md={4} lg={3}>
        <Tile to={`${link}/${id}`} src={path} loading={loading}>
          <Typography component='h2' variant='h4'>{title}</Typography>

          <Typography component='p' variant='p'>{content}</Typography>
        </Tile>
      </GridCol>
    );
  });

  return (
    <Grid>{articleList}</Grid>
  );
}

ArticleList.propTypes = {
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
  link: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ArticleList;
