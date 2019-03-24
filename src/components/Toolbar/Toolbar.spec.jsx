import {mount, shallow} from 'enzyme';
import React from 'react';
import Logo from '../Logo';
import Toolbar from './Toolbar';

describe('Toolbar', () => {
  describe('with default theme', () => {
    it('should render', () => {
      const result = shallow(
        <Toolbar />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = mount(
        <Toolbar>
          <Logo>Test</Logo>
        </Toolbar>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = mount(
        <Toolbar />
      );

      expect(result.find('header')).toMatchSnapshot();
    });
  });

  describe('with light theme', () => {
    it('should render', () => {
      const result = shallow(
        <Toolbar theme='light' />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = mount(
        <Toolbar theme='light'>
          <Logo>Test</Logo>
        </Toolbar>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = mount(
        <Toolbar theme='light' />
      );

      expect(result.find('header')).toMatchSnapshot();
    });
  });

  describe('with dark theme', () => {
    it('should render', () => {
      const result = shallow(
        <Toolbar theme='dark' />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = mount(
        <Toolbar theme='dark'>
          <Logo>Test</Logo>
        </Toolbar>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = mount(
        <Toolbar theme='dark' />
      );

      expect(result.find('header')).toMatchSnapshot();
    });
  });
});
