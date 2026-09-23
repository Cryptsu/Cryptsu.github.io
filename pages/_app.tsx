import { generateDefaultSeo } from "next-seo/pages";
import { ProfilePageJsonLd } from "next-seo";
import { defaultSeo, socialProfileJsonLd } from "@/lib/config/seo.config";
import LayoutProvider from '@/components/Providers/LayoutProvider';
import PageLayout from '@/components/PageLayout';
import { globalStyles } from '@/lib/styles/stiches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      {generateDefaultSeo(defaultSeo)}
      <ProfilePageJsonLd 
        mainEntity={socialProfileJsonLd} 
      />

      <LayoutProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </LayoutProvider>
    </>
  )
}
