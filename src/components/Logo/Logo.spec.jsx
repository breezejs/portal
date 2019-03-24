import {mount, shallow} from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const result = shallow(
      <Logo>BreezeJS</Logo>
    );

    expect(result).toMatchSnapshot();
  });

  it('should contain h1 element with the correct styles', () => {
    const result = mount(
      <Logo>BreezeJS</Logo>
    );

    expect(result.find('h1')).toMatchSnapshot();
  });
});
