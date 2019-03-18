import React, {Fragment} from 'react';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';
import Typography from '../components/Typography/Typography';

function Index () {
  return (
    <Fragment>
      <Grid>
        <GridCol>
          <Typography component='h1' variant='h1'>Hello world</Typography>

          <Typography component='p' variant='lead'>This is a dummy homepage</Typography>

          <Typography component='p' variant='p'>More content will follow...</Typography>
        </GridCol>
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
