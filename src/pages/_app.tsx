import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../layouts/main'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head key="main">
      <link rel="icon" type="image/png" href="favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Euphoria+Script|Roboto+Mono:300,400,500,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" />
      {/* <link rel="stylesheet" href="hamburgers.css" /> */}
    </Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
}

export default MyApp
