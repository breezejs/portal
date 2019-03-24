import {boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import Backdrop from '../components/Backdrop';
import GlobalStyles from '../components/GlobalStyles';
import Spinner from '../components/Spinner';

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
