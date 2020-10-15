import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import { Header } from 'components'

const StyledADHeader = styled(Header)`
  .trigger {
    margin-left:10px;
  }
`

const PageHeader = ({ toggle, collapsed }) => {
  return (
    <StyledADHeader className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </StyledADHeader>
  )
}

PageHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export { PageHeader }
