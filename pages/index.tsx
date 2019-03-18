import React, {Fragment} from 'react';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';

function Index () {
  return (
    <Fragment>
      <Grid>
        <GridCol>Index</GridCol>
      </Grid>
    </Fragment>
  );
}

Index.getInitialProps = () => ({
  title: [
    'Home'
  ]
});

export default Index;
