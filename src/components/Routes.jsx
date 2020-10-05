import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage } from 'components'

const Routes = ({
  t, theme, toggleTheme, i18n,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage idPage="homePage" t={t} toggleTheme={toggleTheme} i18n={i18n} theme={theme} />
      </Route>
      <Route path="/login">
        <LoginPage idPage="loginPage" t={t} toggleTheme={toggleTheme} i18n={i18n} theme={theme} />
      </Route>
    </Switch>
  )
}

Routes.propTypes = {
  t: PropTypes.func,
  theme: PropTypes.object,
  toggleTheme: PropTypes.func,
  i18n: PropTypes.object,
}

export default Routes
