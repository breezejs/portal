import Document, {AnyPageProps, NextDocumentContext} from 'next/document';
import React, {Fragment} from 'react';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  public static async getInitialProps (ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: AnyPageProps) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}{sheet.getStyleElement()}
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
