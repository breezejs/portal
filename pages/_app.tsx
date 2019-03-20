import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {Provider} from 'react-redux';
import Logo from '../components/Logo';
import Toolbar from '../components/Toolbar';
import Loading from '../containers/Loading';
import GlobalStyles from '../core/GlobalStyles';
import {IAppWithReduxProps, withRedux} from '../core/store';
import Wrapper from '../core/Wrapper';

class MyApp extends App<IAppWithReduxProps> {
  private title = 'BreezeJS';

  private get pageTitle () {
    const {pageProps: {title}} = this.props;

    const pageTitle: string[] = title || [];

    if (!pageTitle.includes(this.title)) {
      pageTitle.push(this.title);
    }

    return pageTitle.join(' < ');
  }

  public render () {
    const {Component, pageProps, reduxStore} = this.props;

    return (
      <Provider store={reduxStore}>
        <Head>
          <title>{this.pageTitle}</title>

          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        </Head>

        <Container>
          <GlobalStyles />

          <Loading />

          <Toolbar>
            <Logo>{this.title}</Logo>
          </Toolbar>

          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Container>
      </Provider>
    );
  }
}

export default withRedux(MyApp);
