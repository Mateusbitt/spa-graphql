import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block, Layout, Content } from 'components'
import { ThemeContext } from 'themes'

const StyledLayout = styled(Layout)`
height: 100vh;

.site-layout .site-layout-background {
  background-color: #fff;
}

#PageHeader {
  background: ${({ theme }) => theme.colors.background[0]};
  color: ${({ theme }) => theme.colors.text[0]} !important;
}

.ant-dropdown-link {
  color: ${({ theme }) => theme.colors.text[0]} !important;
}
`

const PageTemplate = (
  {
    idPage, siderbar, pageheader, breadcrumb, children,
  },
) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Block idPage={idPage}>
      <StyledLayout theme={theme}>
        {siderbar}
        <Layout className="site-layout">
          {pageheader}
          {breadcrumb || null}
          <Content>
            {children}
          </Content>
        </Layout>
      </StyledLayout>
    </Block>
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
