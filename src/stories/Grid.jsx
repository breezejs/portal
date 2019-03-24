import {number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Grid from '../components/Grid';
import GridCol from '../components/GridCol';

const stories = storiesOf('Grid', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with 12 columns', () => (
    <Grid columns={number('Columns', 12)} gutter={text('Gutter', '1rem')}>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
      <GridCol xs={1}>col-xs-1</GridCol>
    </Grid>
  ));
