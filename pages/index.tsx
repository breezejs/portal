import React, {Fragment} from 'react';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';
import Tile from '../components/Tile';
import Typography from '../components/Typography';

function Index () {
  return (
    <Fragment>
      <Grid>
        <GridCol>
          <Typography component='h1' variant='h1'>Hello world</Typography>

          <Typography component='p' variant='lead'>This is a dummy homepage with some lead text</Typography>

          <Typography component='p' variant='p'>More content will follow...</Typography>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
        </GridCol>

        <GridCol sm={6} md={4} lg={3}>
          <Tile href='path/to/somewhere' src='https://via.placeholder.com/480x480/999/000?text=Placeholder'>
            <Typography component='h2' variant='h4'>This is a tile</Typography>

            <Typography component='p' variant='p'>It looks very nice</Typography>
          </Tile>
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
