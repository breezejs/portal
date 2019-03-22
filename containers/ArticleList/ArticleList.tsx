import React, {memo} from 'react';
import Grid from '../../components/Grid';
import GridCol from '../../components/GridCol';
import Tile from '../../components/Tile';
import Typography from '../../components/Typography';
import {IArticleList} from './ArticleList.state';

interface IArticleListProps {
  articles: IArticleList[];
  loading: boolean;
}

function ArticleList ({articles, loading}: IArticleListProps) {
  function getImage ({media: {source}}: IArticleList) {
    const {path} = source.find(
      ({name}) => name === 'thumbnail'
    ) || {
      path: ''
    };

    return path;
  }

  function generateTile (article: IArticleList) {
    return (
      <GridCol sm={6} md={4} lg={3}>
        <Tile
          href={`/articles?id=${article.id}`}
          as={`/articles/${article.id}`}
          src={getImage(article)}
          loading={loading}
        >
          <Typography component='h2' variant='h4'>{article.title}</Typography>

          <Typography component='p' variant='p'>{article.content}</Typography>
        </Tile>
      </GridCol>
    );
  }

  return (
    <Grid>
      {articles.map((article) => generateTile(article))}
    </Grid>
  );
}

export default memo(ArticleList);
