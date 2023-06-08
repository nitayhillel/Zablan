import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Wrapper from '@/components/Wrapper'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
      <title>Zablan</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="לאנשים שאוהבים שימוש חוזר, יצירה והרפתקאות."
      />
  </Head>
  <Provider store={store}>
        <Wrapper/>
  </Provider>
  </>
}
