import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

const Block = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

Block.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Block }
