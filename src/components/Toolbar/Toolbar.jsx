import {darken} from 'polished';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const secondaryBg = darken(0.02, GlobalStylesTheme.light);
const Header = styled.header`
  align-items: center;
  background-color: ${GlobalStylesTheme.light};
  background-image: linear-gradient(
    45deg,
    ${GlobalStylesTheme.light} 25%,
    ${secondaryBg} 25%,
    ${secondaryBg} 50%,
    ${GlobalStylesTheme.light} 50%,
    ${GlobalStylesTheme.light} 75%,
    ${secondaryBg} 75%,
    ${secondaryBg} 100%
  );
  background-size: 28.28px 28.28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .5rem ${GlobalStylesTheme.gridGutter};
  position: relative;
  user-select: none;
`;

function Toolbar ({children}) {
  return (
    <Header>{children}</Header>
  );
}

Toolbar.propTypes = {
  children: PropTypes.element
};

export default memo(Toolbar);
