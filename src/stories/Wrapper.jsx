import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Wrapper from '../components/Wrapper';

const stories = storiesOf('Wrapper', module);

stories
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ))
  .add('with content', () => (
    <Wrapper>{text('Content', 'This component will wrap its content within it')}</Wrapper>
  ));
