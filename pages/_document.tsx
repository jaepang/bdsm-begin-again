import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css" rel="stylesheet" type="text/css" />
          <meta property="og:title" content="Begin Again" />
          <meta property="og:description" content="분당소망교회 청년부 여름신앙수련회 활동 페이지" />
          <meta property="og:url" content="https://bdsm-begin-again.vercel.app" />
          <meta property="og:image" content="https://bdsm-begin-again.vercel.app/thumbnail.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
