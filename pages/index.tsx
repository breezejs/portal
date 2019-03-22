import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';
import Typography from '../components/Typography';
import ArticleList, {IArticleListState} from '../containers/ArticleList';
import {IState} from '../core/store';

interface IIndexProps {
  articles: IArticleListState;
  dispatch: ThunkDispatch<{}, undefined, Action>;
}

function Index (props: IIndexProps) {
  return (
    <Fragment>
      <Grid>
        <GridCol>
          <Typography component='h1' variant='h1'>Hello world</Typography>

          <Typography component='p' variant='lead'>This is a dummy homepage with some lead text</Typography>

          <Typography component='p' variant='p'>More content will follow...</Typography>
        </GridCol>

        {props.articles && <ArticleList articles={props.articles.articles} loading={props.articles.loading} />}
      </Grid>
    </Fragment>
  );
}

Index.getInitialProps = ({store}: any) => {
  console.log(store);

  return {
    title: [
      'Home'
    ]
  };
};

const mapStateToProps = ({articles}: IState) => ({
  articles
});

export default connect(mapStateToProps)(Index);
