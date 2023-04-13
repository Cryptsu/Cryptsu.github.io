import LayoutProvider from '@/components/Providers/LayoutProvider';
import Layout from '@/components/Layout';
import { globalStyles } from '@/lib/styles/stiches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  )
}
