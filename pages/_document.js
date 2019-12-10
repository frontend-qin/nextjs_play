import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // 如果 使用_document.js 文件, 必须重写这个props
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx)
    return {
      ...props
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <style>{`.text{color: #45f}`}</style>
        </Head>
        <body className='text'>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
export default MyDocument
