import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

const StyledTypography = styled(Typography)`
  margin-bottom: 0;
`;

interface ILogoProps {
  children: ReactNode;
}

function Logo ({children}: ILogoProps) {
  return (
    <StyledTypography component='h1' variant='h4'>{children}</StyledTypography>
  );
}

export default memo(Logo);
