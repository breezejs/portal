import {mount, shallow} from 'enzyme';
import React from 'react';
import Backdrop from './Backdrop';
import Spinner from '../Spinner';

describe('Backdrop', () => {
  describe('with children', () => {
    it('should render when shown', () => {
      const result = mount(
        <Backdrop show={true}>
          <Spinner />
        </Backdrop>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render when not shown', () => {
      const result = shallow(
        <Backdrop show={false}>
          <Spinner />
        </Backdrop>
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('without children', () => {
    it('should render when shown', () => {
      const result = shallow(
        <Backdrop show={true} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render when not shown', () => {
      const result = shallow(
        <Backdrop show={false} />
      );

      expect(result).toMatchSnapshot();
    });
  });
});
