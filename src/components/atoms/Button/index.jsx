import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button``

const Button = ({ text, ...props }) => {
  return (
    <StyledButton {...props}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

export { Button }
