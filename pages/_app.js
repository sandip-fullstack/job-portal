import '../styles/globals.css'
import "../styles/tachyons.css"
import { QueryClient, QueryClientProvider } from 'react-query'
import React  from 'react';
import Header from '../UI/libraries/header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function MyApp({ Component, pageProps }) {
  return (<QueryClientProvider client={queryClient}>
    <React.StrictMode>  
      <Header />
      <Component {...pageProps} />
    </React.StrictMode>  
    </QueryClientProvider>)
}

export default MyApp
