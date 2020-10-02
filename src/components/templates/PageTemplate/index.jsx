import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``
const Header = styled(Block)``
const Content = styled(Block)``
const Footer = styled(Block)``

const PageTemplate = ({
  content, header, footer,
}) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  content: PropTypes.any.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
}

export { PageTemplate }
