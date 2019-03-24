import {boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Spinner from '../Spinner';
import Backdrop from './Backdrop';

const stories = storiesOf('Backdrop', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with no content', () => (
    <Backdrop show={boolean('Show', true)} />
  ))
  .add('with spinner', () => (
    <Backdrop show={boolean('Show', true)}>
      <Spinner theme="primary" />
    </Backdrop>
  ));
