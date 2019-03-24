import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router';
import GlobalStyles from '../components/GlobalStyles';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';
import Tile from '../components/Tile';
import Typography from '../components/Typography';

const stories = storiesOf('Tile', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .addDecorator((storyFn) => (
    <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
  ))
  .add('without a link', () => (
    <Grid>
      <GridCol xs={4}>
        <Tile src={text('Image src', 'https://via.placeholder.com/400')} loading={boolean('Loading', false)}>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      </GridCol>
    </Grid>
  ))
  .add('with a link', () => (
    <Grid>
      <GridCol xs={4}>
        <Tile
          src='https://via.placeholder.com/400'
          to={text('To', '/')}
          loading={boolean('Loading', false)}
        >
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      </GridCol>
    </Grid>
  ));
