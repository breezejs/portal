import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';

const Col = styled.div`
  grid-column: ${({xs}: IGridColProps) => `span ${xs}`};
  position: relative;

  ${({sm}: IGridColProps) => sm ? `
    @media (min-width: 576px) {
      grid-column: span ${sm};
    }
  ` : null}

  ${({md}: IGridColProps) => md ? `
    @media (min-width: 768px) {
      grid-column: span ${md};
    }
  ` : null}

  ${({lg}: IGridColProps) => lg ? `
    @media (min-width: 992px) {
      grid-column: span ${lg};
    }
  ` : null}
`;

type GridColType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

interface IGridColProps {
  children?: ReactNode;
  lg?: GridColType;
  md?: GridColType;
  sm?: GridColType;
  xs?: GridColType;
}

function GridCol ({children, lg, md, sm, xs = 12}: IGridColProps) {
  return (
    <Col lg={lg} md={md} sm={sm} xs={xs}>{children}</Col>
  );
}

export default memo(GridCol);
