import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Wrapper from '@/components/Wrapper'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
  <title>Zablan</title>
  </Head>
  <Provider store={store}>
        <Wrapper/>
  </Provider>
  </>
}
