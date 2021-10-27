import '@fontsource/inter'
import '@fontsource/prata'
import '@fontsource/jetbrains-mono'
import GlobalStyles from '@/styles/global-styles'

import { ComponentType } from 'react'
import { NextComponentType } from 'next'
import type { AppProps } from 'next/app'

import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'

interface AppWithLayout extends AppProps {
  Component: NextComponentType & { Layout: ComponentType }
}

const Noop = ({ children }: any) => children

function MyApp({ Component, pageProps }: AppWithLayout) {
  const Layout = Component.Layout || Noop

  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}
export default MyApp
