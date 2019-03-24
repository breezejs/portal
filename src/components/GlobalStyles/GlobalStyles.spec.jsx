import {shallow} from 'enzyme';
import React from 'react';
import GlobalStyles from './GlobalStyles';

describe('GlobalStyles', () => {
  it('should render global app styles', () => {
    const result = shallow(
      <GlobalStyles />
    );

    expect(result).toMatchSnapshot();
  });
});
