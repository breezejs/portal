import {optionsKnob, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Spinner from './Spinner';

const stories = storiesOf('Spinner', module);

const options = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning'
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
  .add('with multiple themes', () => (
    <Spinner theme={optionsKnob('Theme', options, 'info', optionsObj)} />
  ));
