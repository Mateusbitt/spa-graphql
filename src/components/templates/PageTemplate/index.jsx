import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``
const Sider = styled(Block)``
const Header = styled(Block)``
const Content = styled(Block)``
const Footer = styled(Block)``

const PageTemplate = ({
  idPage, sider, header, content, footer,
}) => {
  return (
    <Wrapper idPage={idPage}>
      <Sider>{sider}</Sider>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  idPage: PropTypes.string.isRequired,
  sider: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired,
}

export { PageTemplate }
