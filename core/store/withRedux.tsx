import App, {AppProps, DefaultAppIProps, NextAppContext} from 'next/app';
import React, {Component, ComponentClass} from 'react';
import {initStore} from './store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore () {
  if (isServer) {
    return initStore();
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore();
  }

  return window[__NEXT_REDUX_STORE__];
}

export interface IAppWithReduxProps extends AppProps, DefaultAppIProps {
  initialReduxState: {
    [name: string]: string;
  };
  reduxStore: ReturnType<typeof getOrCreateStore>;
}

export function withRedux (Application: ComponentClass<IAppWithReduxProps>) {
  return class WithRedux extends Component<IAppWithReduxProps> {
    public static async getInitialProps (appContext: NextAppContext) {
      const reduxStore = getOrCreateStore();

      (appContext.ctx as any).reduxStore = reduxStore;

      let pageProps = {};

      if (typeof (Application as typeof App).getInitialProps === 'function') {
        pageProps = await (Application as typeof App).getInitialProps(appContext);
      }

      return {
        ...pageProps,
        initialReduxState: reduxStore.getState()
      };
    }

    private readonly reduxStore: ReturnType<typeof getOrCreateStore>;

    constructor (props: IAppWithReduxProps) {
      super(props);

      this.reduxStore = getOrCreateStore();
    }

    public render () {
      return (
        <Application {...this.props} reduxStore={this.reduxStore} />
      );
    }
  };
}
