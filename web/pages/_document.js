import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import client from '../client'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang) => {
      return {...initialProps, lang}
    })
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
