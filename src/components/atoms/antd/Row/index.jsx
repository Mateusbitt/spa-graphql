import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block } from '../../Block/index'

const Wrapper = styled(Block)``

const Row = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Row.propTypes = {
  children: PropTypes.string.isRequired,
}

export { Row }
