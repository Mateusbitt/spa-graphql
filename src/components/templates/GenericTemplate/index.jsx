import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``

const GenericTemplate = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any,
}

export { GenericTemplate }
