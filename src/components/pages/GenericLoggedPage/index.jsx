import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { usePersistedState } from 'hooks'
import { ThemeContext } from 'themes'
import { CheckLoggedInn } from 'utils'

import { Siderbar, PageHeader, PageTemplate } from 'components'

const GenericLoggedPage = ({ idPage, children }) => {
  CheckLoggedInn()
  const [collapsed, setCollapsed] = usePersistedState('collapsed', JSON.parse(localStorage.getItem('collapsed')) || false)
  const { toggleTheme } = useContext(ThemeContext)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <PageTemplate
      idPage={idPage}
      siderbar={<Siderbar toggleTheme={toggleTheme} collapsed={!!collapsed} />}
      pageheader={<PageHeader toggle={toggle} collapsed={!!collapsed} />}
      breadcrumb={null}
    >
      {children}
    </PageTemplate>
  )
}

GenericLoggedPage.propTypes = {
  idPage: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export { GenericLoggedPage }
