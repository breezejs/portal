import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

const StyledTypography = styled(Typography)`
  margin-bottom: 0;
`;

function Logo ({children}) {
  return (
    <StyledTypography component='h1' variant='h4'>{children}</StyledTypography>
  );
}

Logo.propTypes = {
  children: PropTypes.string.isRequired
};

export default memo(Logo);
