import {darken, mix, readableColor, rgba} from 'polished';
import PropTypes from 'prop-types';
import {createElement, memo} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

function failedPropType (props, propName, componentName) {
  // eslint-disable-next-line max-len
  return new Error(`Failed prop type: The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`${props[propName]}\`.`);
}

function incompatibleElement (propName, element) {
  return new Error(`Failed prop type: The prop \`${propName}\` is incompatible with the element \`${element}\`.`);
}

function buildButton (properties) {
  const {element} = properties;
  const elementTypes = element === 'link' ? Link : 'button';
  const Component = styled(elementTypes)`
    ${({theme, size}) => `
      background-color: ${GlobalStylesTheme[theme]};
      border: 1px solid ${GlobalStylesTheme[theme]};
      color: ${GlobalStylesTheme.white};
      display: inline-block;
      line-height: ${GlobalStylesTheme.lineHeightBase};
      padding: ${GlobalStylesTheme.btn[size].paddingY} ${GlobalStylesTheme.btn[size].paddingX};
      font-family: ${GlobalStylesTheme.fontFamilyBase};
      font-size: ${GlobalStylesTheme.btn[size].fontSize};
      font-weight: ${GlobalStylesTheme.fontWeightBase};
      text-align: center;
      user-select: none;
      vertical-align: middle;

      :hover {
        background-color: ${darken(0.075, GlobalStylesTheme[theme])};
        border-color: ${darken(0.1, GlobalStylesTheme[theme])};
        color: ${GlobalStylesTheme.white};
        text-decoration: none;
      }

      :focus {
        box-shadow: 0 0 0 .2rem ${rgba(mix(0.15, readableColor(GlobalStylesTheme[theme]), GlobalStylesTheme[theme]), .5)};
        outline: 0;
      }

      :disabled {
        background-color: ${GlobalStylesTheme[theme]};
        border-color: ${GlobalStylesTheme[theme]};
        box-shadow: none;
        color: ${GlobalStylesTheme.white};
        opacity: ${GlobalStylesTheme.btn.disabledOpacity};
      }
    `}
  `;

  return createElement(Component, properties);
}

function Button (props) {
  return buildButton(props);
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOf(['link', 'button']),
  onClick (props, propName, componentName) {
    if (typeof props[propName] === 'function') {
      if (props.element === 'link') {
        throw incompatibleElement(propName, props.element);
      }

      const validation = PropTypes.func;

      return validation.apply(this, arguments);
    }

    if (props.element === 'button') {
      throw failedPropType(props, propName, componentName);
    }
  },
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  theme: PropTypes.oneOf(['danger', 'info', 'primary', 'secondary', 'success', 'warning']),
  to (props, propName, componentName) {
    if (typeof props[propName] === 'string') {
      if (props.element === 'button') {
        throw incompatibleElement(propName, props.element);
      }

      const validation = PropTypes.string.isRequired;

      return validation.apply(this, arguments);
    }

    if (props.element === 'link') {
      throw failedPropType(props, propName, componentName);
    }
  },
  type (props, propName, componentName) {
    if (typeof props[propName] === 'string') {
      if (props.element === 'link') {
        throw incompatibleElement(propName, props.element);
      }

      const validation = PropTypes.oneOf(['button', 'submit']).isRequired;

      return validation.apply(this, arguments);
    }

    if (props.element === 'button') {
      throw failedPropType(props, propName, componentName);
    }
  }
};

Button.defaultProps = {
  element: 'button',
  size: 'md',
  theme: 'primary'
};

export default memo(Button);
