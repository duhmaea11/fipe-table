import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/ts/theme'
import GlobalStyle from '@/styles/ts/global'
import { Provider } from 'react-redux'
import store from '@/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>

)}

export default MyApp
