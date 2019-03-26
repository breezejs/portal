import {action} from '@storybook/addon-actions';
import {boolean, optionsKnob, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router';
import GlobalStyles from '../GlobalStyles';
import Button from './Button';

const stories = storiesOf('Button', module);
const themeOptions = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning'
};
const sizeOptions = {
  lg: 'lg',
  md: 'md',
  sm: 'sm'
};
const optionsObj = {
  display: 'select'
};

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .addDecorator((storyFn) => (
    <MemoryRouter>{storyFn()}</MemoryRouter>
  ))
  .add('as a button', () => (
    <Button
      type='button'
      disabled={boolean('Disabled', false)}
      size={optionsKnob('Size', sizeOptions, 'md', optionsObj)}
      theme={optionsKnob('Theme', themeOptions, 'primary', optionsObj)}
      onClick={action('clicked')}
    >
      Button
    </Button>
  ))
  .add('as a link', () => (
    <Button
      element='link'
      to='/'
      size={optionsKnob('Size', sizeOptions, 'md', optionsObj)}
      theme={optionsKnob('Theme', themeOptions, 'primary', optionsObj)}
    >
      Button
    </Button>
  ));
