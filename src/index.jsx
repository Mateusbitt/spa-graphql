import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from 'themes'
import { client } from './apolloConfig'
import './i18n'
import App from './components/App'

const renderApp = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}

render(renderApp(), document.getElementById('app'))
