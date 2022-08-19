import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Head>
        <title>ホームページを作成しよう</title>
        <meta name="description" content="ホームページ作成しよう" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/tmfav53708.ico" />
        <link rel="apple-touch-icon" href="/house.png" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>,
  )
}

export default MyApp
