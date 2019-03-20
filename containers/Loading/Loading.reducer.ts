import {ILoadingActions, LoadingActionTypes} from './Loading.actions';

export const initialState = {
  loading: false
};

export function loadingReducer (state = initialState, {type}: ILoadingActions) {
  switch (type) {
  case LoadingActionTypes.Start:
    return {
      loading: true
    };
  case LoadingActionTypes.Stop:
    return {
      loading: false
    };
  default:
    return state;
  }
}
