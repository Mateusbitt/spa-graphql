import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)`
  margin: 10px;
`

const GenericTemplate = ({ children }) => {
  return (
    <Wrapper id="GenericTemplate">
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any,
}

export { GenericTemplate }
