import {shallow} from 'enzyme';
import React from 'react';
import Grid from './Grid';
import GridCol from '../GridCol';

describe('Grid', () => {
  describe('with default values', () => {
    it('should render', () => {
      const result = shallow(
        <Grid />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = shallow(
        <Grid>
          <GridCol />
        </Grid>
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with no gutter', () => {
    it('should render', () => {
      const result = shallow(
        <Grid gutter='0' />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = shallow(
        <Grid gutter='0'>
          <GridCol />
        </Grid>
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('with custom number of columns', () => {
    it('should render', () => {
      const result = shallow(
        <Grid columns={10} />
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a child components', () => {
      const result = shallow(
        <Grid columns={10}>
          <GridCol />
        </Grid>
      );

      expect(result).toMatchSnapshot();
    });
  });
});
