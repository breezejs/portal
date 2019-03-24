import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Spinner from '../components/Spinner';

const stories = storiesOf('Spinner', module);

stories
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with primary theme', () => (
    <Spinner theme="primary" />
  ))
  .add('with secondary theme', () => (
    <Spinner theme="secondary" />
  ))
  .add('with info theme', () => (
    <Spinner theme="info" />
  ))
  .add('with success theme', () => (
    <Spinner theme="success" />
  ))
  .add('with danger theme', () => (
    <Spinner theme="danger" />
  ))
  .add('with warning theme', () => (
    <Spinner theme="warning" />
  ));
