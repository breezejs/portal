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

function GridCol ({children, lg, md, sm, xs = 12}) {
  return (
    <Col lg={lg} md={md} sm={sm} xs={xs}>{children}</Col>
  );
}

GridCol.propTypes = {
  children: PropTypes.node,
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

export default memo(GridCol);
