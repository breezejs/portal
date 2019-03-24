import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const Main = styled.main`
  background-color: ${GlobalStylesTheme.bodyBg};
  padding: ${GlobalStylesTheme.gridGutter};
`;

function Wrapper ({children}) {
  return (
    <Main>{children}</Main>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(Wrapper);
