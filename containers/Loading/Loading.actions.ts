export interface ILoadingActions {
  type: LoadingActionTypes;
}

export enum LoadingActionTypes {
  Start = '[Loading] Start',
  Stop = '[Loading] Stop'
}

export function loadingStart () {
  return {
    type: LoadingActionTypes.Start
  };
}

export function loadingEnd () {
  return {
    type: LoadingActionTypes.Stop
  };
}
