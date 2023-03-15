import ThemeProvider from '@/components/ThemeProvider';
import { globalStyles, themes } from '@/lib/styles/stiches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider themes={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
