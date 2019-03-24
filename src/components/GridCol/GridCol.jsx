import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';

const Col = styled.div`
  grid-column: ${({xs}) => `span ${xs}`};
  position: relative;

  ${({sm}) => sm ? `
    @media (min-width: 576px) {
      grid-column: span ${sm};
    }
  ` : null}

  ${({md}) => md ? `
    @media (min-width: 768px) {
      grid-column: span ${md};
    }
  ` : null}

  ${({lg}) => lg ? `
    @media (min-width: 992px) {
      grid-column: span ${lg};
    }
  ` : null}
`;

function GridCol ({children, lg, md, sm, xs}) {
  return (
    <Col lg={lg} md={md} sm={sm} xs={xs}>{children}</Col>
  );
}

GridCol.propTypes = {
  children: PropTypes.node,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number
};

GridCol.defaultProps = {
  children: null,
  lg: null,
  md: null,
  sm: null,
  xs: 12
};

export default memo(GridCol);
