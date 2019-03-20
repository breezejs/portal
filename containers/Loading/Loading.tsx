import React from 'react';
import {connect} from 'react-redux';
import Backdrop from '../../components/Backdrop';
import Spinner from '../../components/Spinner';
import {IState} from '../../core/store';

const mapStateToProps = ({loading: {loading}}: IState) => ({
  loading
});

export interface ILoadingProps {
  loading: boolean;
}

function Loading ({loading}: ILoadingProps) {
  return (
    <Backdrop show={loading}>
      <Spinner />
    </Backdrop>
  );
}

export default connect(mapStateToProps)(Loading);
