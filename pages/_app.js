import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Wrapper from '@/components/Wrapper'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
        <Wrapper/>
  </Provider>
}
