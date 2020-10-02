import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage } from 'components'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  )
}

export default Routes
