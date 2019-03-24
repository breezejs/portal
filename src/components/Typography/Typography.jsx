import PropTypes from 'prop-types';
import React, {createElement, Fragment, memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

function buildComponent (properties) {
  const coreHeadingStyles = `
    color: ${GlobalStylesTheme.headingsColour};
    font-family: ${GlobalStylesTheme.headingsFontFamily};
    font-weight: ${GlobalStylesTheme.headingsFontWeight};
    line-height: ${GlobalStylesTheme.headingsLineHeight};
    margin-bottom: ${GlobalStylesTheme.headingsMarginBottom};
  `;
  const variants = {
    h1: `
      font-size: ${GlobalStylesTheme.h1FontSize};
      ${coreHeadingStyles}
    `,
    h2: `
      font-size: ${GlobalStylesTheme.h2FontSize};
      ${coreHeadingStyles}
    `,
    h3: `
      font-size: ${GlobalStylesTheme.h3FontSize};
      ${coreHeadingStyles}
    `,
    h4: `
      font-size: ${GlobalStylesTheme.h4FontSize};
      ${coreHeadingStyles}
    `,
    h5: `
      font-size: ${GlobalStylesTheme.h5FontSize};
      ${coreHeadingStyles}
    `,
    h6: `
      font-size: ${GlobalStylesTheme.h6FontSize};
      ${coreHeadingStyles}
    `,
    lead: `
      font-size: ${GlobalStylesTheme.leadFontSize};
      font-weight: ${GlobalStylesTheme.leadFontWeight};
    `,
    p: `
      font-size: ${GlobalStylesTheme.fontSizeBase};
    `
  };
  const {component} = properties;
  const Component = styled(component)`
    ${({variant}) => variants[variant]}
  `;

  Component.propTypes = {};

  return createElement(Component, properties);
}

function Typography (props) {
  return (
    <Fragment>{buildComponent(props)}</Fragment>
  );
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']).isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'p']).isRequired
};

export default memo(Typography);
