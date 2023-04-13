import { Html, Head, Main, NextScript } from 'next/document'
import DeviceScript from '@/components/Scripts/DeviceScript';
import { getCssText } from '@/lib/styles/stiches.config'
import { ThemeClassMap } from "@/lib/styles/stiches.config";
import { ThemeConst } from '@/lib/consts';

export default function Document() {
  return (
    <Html lang="en" className={ThemeClassMap[ThemeConst.THEME_DEFAULT]}>
      <Head>
        {/* Enable Server-side rendering */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <DeviceScript/>
      </Head>
      <body> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
