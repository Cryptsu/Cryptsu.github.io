import LayoutProvider from '@/components/Providers/LayoutProvider';
import PageLayout from '@/components/PageLayout';
import { globalStyles } from '@/lib/styles/stiches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <LayoutProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </LayoutProvider>
  )
}
