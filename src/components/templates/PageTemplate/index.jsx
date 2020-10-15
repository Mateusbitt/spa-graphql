import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Content } from 'components'

const StyledLayout = styled(Layout)`
height: 100vh;
.site-layout .site-layout-background {
  background: #fff;
}
`

const PageTemplate = (
  {
    idPage, siderbar, pageheader, breadcrumb, children,
  },
) => {
  return (
    <StyledLayout idPage={idPage}>
      {siderbar}
      <Layout className="site-layout">
        {pageheader}
        {breadcrumb || null}
        <Content>
          {children}
        </Content>
      </Layout>
    </StyledLayout>
  )
}

PageTemplate.propTypes = {
  idPage: PropTypes.string.isRequired,
  siderbar: PropTypes.node.isRequired,
  pageheader: PropTypes.node.isRequired,
  breadcrumb: PropTypes.node,
  children: PropTypes.any.isRequired,
}

export { PageTemplate }
