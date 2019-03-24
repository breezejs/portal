import {darken} from 'polished';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const SpinnerElement = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
    
  }

  height: 100px;
  left: 50%;
  margin: -50px 0 0 -50px;
  position: fixed;
  top: 50%;
  width: 100px;
  z-index: ${GlobalStylesTheme.zIndexSpinner};

  ::before {
    content: "Loading...";
    height: 100px;
    left: 50%;
    margin: -50px 0 0 -50px;
    position: absolute;
    top: 50%;
    width: 100px;
  }

  :not(:required) {
    ::before {
      animation: spinner .6s linear infinite;
      border: 5px solid ${darken(0.1, GlobalStylesTheme.bodyBg)};
      border-radius: 50%;
      border-top-color: ${({theme}) => GlobalStylesTheme[theme]};
      content: "";
    }
  }
`;

function Spinner ({theme}) {
  return (
    <SpinnerElement theme={theme} />
  );
}

Spinner.propTypes = {
  theme: PropTypes.oneOf(['danger', 'info', 'primary', 'secondary', 'success', 'warning'])
};

export default memo(Spinner);
