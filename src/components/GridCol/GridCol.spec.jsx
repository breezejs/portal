import {mount, shallow} from 'enzyme';
import React from 'react';
import GridCol from './GridCol';

describe('GridCol', () => {
  describe('with default values', () => {
    it('should render', () => {
      const result = shallow(
        <GridCol />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with children', () => {
      const result = mount(
        <GridCol>Hello world</GridCol>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = shallow(
        <GridCol />
      );

      expect(result.find('div')).toMatchSnapshot();
    });
  });

  describe('with xs set', () => {
    it('should render', () => {
      const result = shallow(
        <GridCol xs={6} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with children', () => {
      const result = mount(
        <GridCol xs={6}>Hello world</GridCol>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = shallow(
        <GridCol xs={6} />
      );

      expect(result.find('div')).toMatchSnapshot();
    });
  });

  describe('with sm set', () => {
    it('should render', () => {
      const result = shallow(
        <GridCol sm={6} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with children', () => {
      const result = mount(
        <GridCol sm={6}>Hello world</GridCol>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = shallow(
        <GridCol sm={6} />
      );

      expect(result.find('div')).toMatchSnapshot();
    });
  });

  describe('with md set', () => {
    it('should render', () => {
      const result = shallow(
        <GridCol sm={6} md={4} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with children', () => {
      const result = mount(
        <GridCol sm={6} md={4}>Hello world</GridCol>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = shallow(
        <GridCol sm={6} md={4} />
      );

      expect(result.find('div')).toMatchSnapshot();
    });
  });

  describe('with lg set', () => {
    it('should render', () => {
      const result = shallow(
        <GridCol sm={6} md={4} lg={2} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with children', () => {
      const result = mount(
        <GridCol sm={6} md={4} lg={2}>Hello world</GridCol>
      );

      expect(result).toMatchSnapshot();
    });

    it('should have the correct css styles', () => {
      const result = shallow(
        <GridCol sm={6} md={4} lg={2} />
      );

      expect(result.find('div')).toMatchSnapshot();
    });
  });
});
