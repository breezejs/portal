import {mount} from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  describe('as a button', () => {
    it('should throw an error if "onClick" prop is not set', () => {
      expect(() => {
        mount(
          <Button type='button'>Button</Button>
        );
      }).toThrow('Failed prop type: Failed prop type: The prop `onClick` is marked as required in `Button`, but its value is `undefined`.');
    });

    it('should throw an error if "type" prop is not set', () => {
      expect(() => {
        mount(
          <Button onClick={onClick}>Button</Button>
        );
      }).toThrow('Failed prop type: Failed prop type: The prop `type` is marked as required in `Button`, but its value is `undefined`.');
    });

    it('should throw an error if "to" prop is set', () => {
      expect(() => {
        mount(
          <Button type='button' to='/' onClick={onClick}>Button</Button>
        );
      }).toThrow('Failed prop type: The prop `to` is incompatible with the element `button`.');
    });
  });

  describe('as a link', () => {
    it('should throw an error if "to" prop is not set', () => {
      expect(() => {
        mount(
          <Button element='link'>Link</Button>
        );
      }).toThrow('Failed prop type: Failed prop type: The prop `to` is marked as required in `Button`, but its value is `undefined`.');
    });

    it('should throw an error if "onClick" prop is set', () => {
      expect(() => {
        mount(
          <Button element='link' to='/' onClick={onClick}>Link</Button>
        );
      }).toThrow('Failed prop type: The prop `onClick` is incompatible with the element `link`.');
    });

    it('should throw an error if "type" prop is set', () => {
      expect(() => {
        mount(
          <Button element='link' to='/' type='submit'>Link</Button>
        );
      }).toThrow('Failed prop type: The prop `type` is incompatible with the element `link`.');
    });
  });
});
