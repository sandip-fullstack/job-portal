import '../styles/globals.css'
import "../styles/tachyons.css"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '../UI/libraries/header'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function MyApp({ Component, pageProps }) {
  return (<QueryClientProvider client={queryClient}>
    <Header />
    <ReactQueryDevtools/>
      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
