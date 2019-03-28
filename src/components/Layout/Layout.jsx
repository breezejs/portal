import PropTypes from 'prop-types';
import React, {Fragment, memo} from 'react';
import GlobalStyles from '../GlobalStyles';
import Toolbar from '../Toolbar';
import Logo from '../Logo';
import Wrapper from '../Wrapper';

function Layout ({children}) {
  return (
    <Fragment>
      <GlobalStyles />

      <Toolbar>
        <Logo>BreezeJS</Logo>
      </Toolbar>

      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default memo(Layout)
