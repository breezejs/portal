import {darken} from 'polished';
import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const secondaryBg = darken(0.01, GlobalStylesTheme.bodyBg);
const Main = styled.main`
  background-color: ${GlobalStylesTheme.bodyBg};
  background-image: linear-gradient(
    45deg,
    ${GlobalStylesTheme.bodyBg} 25%,
    ${secondaryBg} 25%,
    ${secondaryBg} 50%,
    ${GlobalStylesTheme.bodyBg} 50%,
    ${GlobalStylesTheme.bodyBg} 75%,
    ${secondaryBg} 75%,
    ${secondaryBg} 100%
  );
  background-size: 28.28px 28.28px;
  padding: ${GlobalStylesTheme.gridGutter};
`;

interface IWrapperProps {
  children?: ReactNode;
}

function Wrapper ({children}: IWrapperProps) {
  return (
    <Main>{children}</Main>
  );
}

export default memo(Wrapper);
