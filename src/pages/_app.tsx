import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import i18nCb from '../utils/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  i18nCb()
  return <Component {...pageProps} />
}

export default MyApp
