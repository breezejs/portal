import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Typography from '../Typography';
import Tile from './Tile';

describe('Tile', () => {
  describe('with default properties', () => {
    it('should render', () => {
      const result = mount(
        <Tile>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    it('should render', () => {
      const result = mount(
        <Tile loading>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with an image set', () => {
      const result = mount(
        <Tile src='/path/to/image.jpg' loading>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a link set', () => {
      const result = mount(
        <MemoryRouter keyLength={0}>
          <Tile to='/path/to/page' loading>
            <Typography component="h1" variant="h1">Tile title</Typography>

            <Typography component="p" variant="p">Tile lead text</Typography>
          </Tile>
        </MemoryRouter>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with both a link and image set', () => {
      const result = mount(
        <MemoryRouter keyLength={0}>
          <Tile to='/path/to/page' src='/path/to/image.jpg' loading>
            <Typography component="h1" variant="h1">Tile title</Typography>

            <Typography component="p" variant="p">Tile lead text</Typography>
          </Tile>
        </MemoryRouter>
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('when not loading', () => {
    it('should render', () => {
      const result = mount(
        <Tile loading={false}>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with an image set', () => {
      const result = mount(
        <Tile src='/path/to/image.jpg' loading={false}>
          <Typography component="h1" variant="h1">Tile title</Typography>

          <Typography component="p" variant="p">Tile lead text</Typography>
        </Tile>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with a link set', () => {
      const result = mount(
        <MemoryRouter keyLength={0}>
          <Tile to='/path/to/page' loading={false}>
            <Typography component="h1" variant="h1">Tile title</Typography>

            <Typography component="p" variant="p">Tile lead text</Typography>
          </Tile>
        </MemoryRouter>
      );

      expect(result).toMatchSnapshot();
    });

    it('should render with both a link and image set', () => {
      const result = mount(
        <MemoryRouter keyLength={0}>
          <Tile to='/path/to/page' src='/path/to/image.jpg' loading={false}>
            <Typography component="h1" variant="h1">Tile title</Typography>

            <Typography component="p" variant="p">Tile lead text</Typography>
          </Tile>
        </MemoryRouter>
      );

      expect(result).toMatchSnapshot();
    });
  });
});
