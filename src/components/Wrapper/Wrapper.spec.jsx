import {mount, shallow} from 'enzyme';
import React from 'react';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('should render', () => {
    const result = shallow(
      <Wrapper>Content</Wrapper>
    );

    expect(result).toMatchSnapshot();
  });

  it('should have the correct css styles', () => {
    const result = mount(
      <Wrapper>Content</Wrapper>
    );

    expect(result.find('main')).toMatchSnapshot();
  });
});
