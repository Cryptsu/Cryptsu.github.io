import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/lib/styles/stiches.config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Enable Server-side rendering */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
