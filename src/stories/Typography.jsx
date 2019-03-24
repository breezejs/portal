import {optionsKnob, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Typography from '../components/Typography';

const stories = storiesOf('Typography', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with H1 element and variant', () => (
    <Typography component="h1" variant="h1">Typography</Typography>
  ))
  .add('with H2 element and variant', () => (
    <Typography component="h2" variant="h2">Typography</Typography>
  ))
  .add('with H3 element and variant', () => (
    <Typography component="h3" variant="h3">Typography</Typography>
  ))
  .add('with H4 element and variant', () => (
    <Typography component="h4" variant="h4">Typography</Typography>
  ))
  .add('with H5 element and variant', () => (
    <Typography component="h5" variant="h5">Typography</Typography>
  ))
  .add('with H6 element and variant', () => (
    <Typography component="h6" variant="h6">Typography</Typography>
  ))
  .add('with P element and variant', () => (
    <Typography component="p" variant="p">Typography</Typography>
  ))
  .add('with P element and lead variant', () => (
    <Typography component="p" variant="lead">Typography</Typography>
  ))
  .add('with full customisation', () => {
    const componentOptions = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      p: 'p'
    };
    const variantOptions = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      lead: 'lead',
      p: 'p'
    };
    const defaultOption = 'h1';
    const optionsObj = {
      display: 'select'
    };

    return (
      <Typography
        component={optionsKnob('Component', componentOptions, defaultOption, optionsObj)}
        variant={optionsKnob('Variant', variantOptions, defaultOption, optionsObj)}
      >Typography</Typography>
    );
  });
