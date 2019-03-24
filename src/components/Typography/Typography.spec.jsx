import {mount} from 'enzyme';
import React from 'react';
import Typography from './Typography';

describe('Typography', () => {
  describe('h1 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h1'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h2'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h3'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h4'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h5'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h1' variant='h6'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h1' variant='lead'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h1' variant='p'>Test</Typography>
      );

      expect(result.find('h1')).toMatchSnapshot();
    });
  });

  describe('h2 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h1'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h2'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h3'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h4'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h5'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h2' variant='h6'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h2' variant='lead'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h2' variant='p'>Test</Typography>
      );

      expect(result.find('h2')).toMatchSnapshot();
    });
  });

  describe('h3 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h1'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h2'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h3'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h4'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h5'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h3' variant='h6'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h3' variant='lead'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h3' variant='p'>Test</Typography>
      );

      expect(result.find('h3')).toMatchSnapshot();
    });
  });

  describe('h4 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h1'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h2'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h3'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h4'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h5'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h4' variant='h6'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h4' variant='lead'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h4' variant='p'>Test</Typography>
      );

      expect(result.find('h4')).toMatchSnapshot();
    });
  });

  describe('h5 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h1'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h2'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h3'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h4'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h5'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h5' variant='h6'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h5' variant='lead'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h5' variant='p'>Test</Typography>
      );

      expect(result.find('h5')).toMatchSnapshot();
    });
  });

  describe('h6 element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h1'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h2'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h3'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h4'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h5'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='h6' variant='h6'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='h6' variant='lead'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='h6' variant='p'>Test</Typography>
      );

      expect(result.find('h6')).toMatchSnapshot();
    });
  });

  describe('p element', () => {
    it('should render as h1 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h1'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as h2 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h2'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as h3 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h3'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as h4 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h4'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as h5 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h5'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as h6 variant style', () => {
      const result = mount(
        <Typography component='p' variant='h6'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as lead variant style', () => {
      const result = mount(
        <Typography component='p' variant='lead'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });

    it('should render as p variant style', () => {
      const result = mount(
        <Typography component='p' variant='p'>Test</Typography>
      );

      expect(result.find('p')).toMatchSnapshot();
    });
  });
});
