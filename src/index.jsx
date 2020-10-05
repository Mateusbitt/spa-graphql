import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles, ThemeProvider } from 'themes'
import { client } from './apolloConfig'
import './i18n'
import 'antd/dist/antd.css'
import App from './components/App'

const renderApp = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

render(renderApp(), document.getElementById('app'))
