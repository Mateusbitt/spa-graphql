import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apolloConfig'
import App from './components/App'

const renderApp = () => (
  <ApolloProvider client={client}>
    <App color="black" />
  </ApolloProvider>
)

render(renderApp(), document.getElementById('app'))
