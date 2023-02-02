import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import exp from 'constants'

export default function App({ Component, pageProps }: AppProps) {
  return( <ChakraProvider>
  <Component {...pageProps} />
</ChakraProvider>
  )
}