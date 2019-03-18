import React, {createElement, Fragment, memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../../core/GlobalStyles';

function buildComponent (props: ITypographyProps) {
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
  const Component = styled(props.component)`
    ${({variant}: ITypographyProps) => variants[variant]}
  `;

  return createElement(Component, props);
}

type TypographyComponentTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

type TypographyVariantTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'p';

interface ITypographyProps {
  children: ReactNode;
  component: TypographyComponentTypes;
  variant: TypographyVariantTypes;
}

function Typography (props: ITypographyProps) {
  return (
    <Fragment>{buildComponent(props)}</Fragment>
  );
}

export default memo(Typography);
