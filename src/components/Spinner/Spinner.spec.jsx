import {shallow} from 'enzyme';
import React from 'react';
import Spinner from './Spinner';

describe('Spinner', () => {
  describe('with no theme set', () => {
    it('should render and default to info', () => {
      const result = shallow(
        <Spinner />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with primary theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='primary' />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with secondary theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='secondary' />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with success theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='success' />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with danger theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='danger' />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with warn theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='warn' />
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with info theme', () => {
    it('should render', () => {
      const result = shallow(
        <Spinner theme='info' />
      );

      expect(result).toMatchSnapshot();
    });
  });
});
