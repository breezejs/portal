import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const Main = styled.main`
  background-color: ${GlobalStylesTheme.bodyBg};
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
