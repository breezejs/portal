import React, {Fragment, memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../../core/GlobalStyles';

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

interface IBackdropProps {
  children?: ReactNode;
  show: boolean;
}

function Backdrop ({children, show}: IBackdropProps) {
  function renderBackdrop () {
    return(
      <Overlay>{children}</Overlay>
    );
  }

  return(
    <Fragment>{show && renderBackdrop()}</Fragment>
  );
}

export default memo(Backdrop);
