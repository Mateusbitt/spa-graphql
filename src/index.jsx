import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloConfig'
import App from './components/App'

const renderApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

render(renderApp(), document.getElementById('app'))
