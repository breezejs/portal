import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Logo from '../components/Logo';
import Toolbar from '../components/Toolbar';

const stories = storiesOf('Toolbar', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('without content', () => (
    <Toolbar />
  ))
  .add('with content', () => (
    <Toolbar>
      <Logo>{text('Logo text', 'BreezeJS')}</Logo>
    </Toolbar>
  ));
