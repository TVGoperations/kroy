import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" href="/images/favicon.png" />
          <link rel="mask-icon" href="/images/favicon.png" color="#DEE7E2" />
          <link rel="apple-touch-icon" href="/images/favicon.png" />
          <link rel="preconnect" href="https://cdn.sanity.io" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
