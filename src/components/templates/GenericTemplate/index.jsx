import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)`
  background-color: ${({ theme }) => theme.colors.background[0]};
  height: 100vh;
`

const GenericTemplate = ({ children, theme }) => {
  return (
    <Wrapper id="GenericTemplate" theme={theme}>
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object.isRequired,
}

export { GenericTemplate }
