import PropTypes from 'prop-types';
import React, {Fragment, memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const Overlay = styled.div`
  background-color: ${GlobalStylesTheme.black};
  bottom: 0;
  left: 0;
  opacity: .5;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${GlobalStylesTheme.zIndexBackdrop};
`;

// TODO: Add listener for escape key
function Backdrop ({children, show}) {
  function renderBackdrop () {
    return (
      <Overlay>{children}</Overlay>
    );
  }

  return (
    <Fragment>{show && renderBackdrop()}</Fragment>
  );
}

Backdrop.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool.isRequired
};

Backdrop.defaultProps = {
  children: null
};

export default memo(Backdrop);
