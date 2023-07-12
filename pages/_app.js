import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="shortcut icon" href="/logo512.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/maskable_icon_x384.png"></link>
      <meta name="theme-color" content="#4DB685" />

    </Head>
    <Provider store={store}>
      <Wrapper />
      <Analytics/>
    </Provider>
  </>
}
