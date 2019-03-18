import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../../core/GlobalStyles';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${
    ({columns}: IGridProps) => columns || GlobalStylesTheme.gridColumns
  };, [col-start] 1fr);
  grid-gap: ${({gutter}: IGridProps) => gutter || GlobalStylesTheme.gridGutter};
`;

interface IGridProps {
  children?: ReactNode;
  columns?: number;
  gutter?: string;
}

function Grid ({children, columns, gutter}: IGridProps) {
  return (
    <Container columns={columns} gutter={gutter}>{children}</Container>
  );
}

export default memo(Grid);
