import {optionsKnob, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Logo from '../components/Logo';
import Toolbar from '../components/Toolbar';

const stories = storiesOf('Toolbar', module);

const options = {
  dark: 'dark',
  light: 'light'
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
  .add('without content', () => (
    <Toolbar theme={optionsKnob('Theme', options, 'light', optionsObj)} />
  ))
  .add('with content', () => (
    <Toolbar theme={optionsKnob('Theme', options, 'light', optionsObj)}>
      <Logo>{text('Logo text', 'BreezeJS')}</Logo>
    </Toolbar>
  ));
