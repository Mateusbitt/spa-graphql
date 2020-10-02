import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

const Block = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper {...props}>{children}</Wrapper>
  )
}

Block.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

export { Block }
