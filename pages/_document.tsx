import { Html, Head, Main, NextScript } from 'next/document'
import TextAdjustScript from '@/components/TextAdjustScript';
import { getCssText } from '@/lib/styles/stiches.config'
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { ThemeConst } from '@/lib/consts';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Enable Server-side rendering */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <TextAdjustScript/>
      </Head>
      {/* TODO: This is a quick fix for page flickering. Very bad looking. */}
      <body className={ThemeClassMap[ThemeConst.THEME_DEFAULT]}> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
