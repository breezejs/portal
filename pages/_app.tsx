import App, {Container, NextAppContext} from 'next/app';
import Head from 'next/head';
import React, {Fragment} from 'react';
import GlobalStyles from '../core/GlobalStyles';

class MyApp extends App {
  public static async getInitialProps ({Component, ctx}: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  private title = 'BreezeJS';

  private get pageTitle () {
    const {pageProps: {title}} = this.props;

    const pageTitle: string[] = title || [];

    pageTitle.push(this.title);

    return pageTitle.join(' < ');
  }

  public render () {
    const {Component, pageProps} = this.props;

    return (
      <Fragment>
        <Head>
          <title>{this.pageTitle}</title>

          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        </Head>

        <Container>
          <GlobalStyles />

          <Component {...pageProps} />
        </Container>
      </Fragment>
    );
  }
}

export default MyApp;
