import PropTypes from 'prop-types';
import React, {memo} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns}, [col-start] 1fr);
  grid-gap: ${({gutter}) => gutter};
`;

function Grid ({children, columns, gutter}) {
  return (
    <Container columns={columns} gutter={gutter}>{children}</Container>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.number,
  gutter: PropTypes.string
};

Grid.defaultProps = {
  children: null,
  columns: GlobalStylesTheme.gridColumns,
  gutter: GlobalStylesTheme.gridGutter
};

export default memo(Grid);
