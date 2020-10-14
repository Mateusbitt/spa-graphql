import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CheckLoggedInn } from 'utils'

import { Siderbar, PageHeader, PageTemplate } from 'components'

const GenericLoggedPage = ({ children }) => {
  CheckLoggedInn()
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <PageTemplate
      siderbar={<Siderbar collapsed={collapsed} />}
      pageheader={<PageHeader toggle={toggle} collapsed={collapsed} />}
      breadcrumb={null}
    >
      {children}
    </PageTemplate>
  )
}

GenericLoggedPage.propTypes = {
  children: PropTypes.any.isRequired,
}

export { GenericLoggedPage }
