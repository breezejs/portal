import {number, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Grid from '../Grid';
import GridCol from './GridCol';

const stories = storiesOf('GridCol', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with responsive widths', () => (
    <Grid>
      <GridCol xs={number('xs', 12)} sm={number('sm', 10)} md={number('md', 8)} lg={number('lg', 6)}>Column</GridCol>
    </Grid>
  ));
