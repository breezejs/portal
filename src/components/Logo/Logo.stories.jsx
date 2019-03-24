import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Logo from './Logo';

const stories = storiesOf('Logo', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with brand text', () => (
    <Logo>{text('Brand', 'BreezeJS')}</Logo>
  ));
