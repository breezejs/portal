import {darken} from 'polished';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

function secondaryBg (theme) {
  return darken(0.02, GlobalStylesTheme[theme]);
}

const Header = styled.header`
  ${({theme}) => `
    align-items: center;
    background-color: ${GlobalStylesTheme[theme]};
    background-image: linear-gradient(
      45deg,
      ${GlobalStylesTheme[theme]} 25%,
      ${secondaryBg(theme)} 25%,
      ${secondaryBg(theme)} 50%,
      ${GlobalStylesTheme[theme]} 50%,
      ${GlobalStylesTheme[theme]} 75%,
      ${secondaryBg(theme)} 75%,
      ${secondaryBg(theme)} 100%
    );
    background-size: 28.28px 28.28px;
    color: ${theme === 'light' ? GlobalStylesTheme.bodyColour : GlobalStylesTheme.white}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem ${GlobalStylesTheme.gridGutter};
    position: relative;
    user-select: none;
  `}
`;

function Toolbar ({children, theme}) {
  return (
    <Header theme={theme}>{children}</Header>
  );
}

Toolbar.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.oneOf(['light', 'dark'])
};

Toolbar.defaultProps = {
  children: null,
  theme: 'light'
};

export default memo(Toolbar);
