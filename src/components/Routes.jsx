import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage } from 'components'

const Routes = ({ ...props }) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage {...props} />
      </Route>
      <Route path="/login">
        <LoginPage {...props} />
      </Route>
    </Switch>
  )
}

export default Routes
