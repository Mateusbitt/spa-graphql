import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button``

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export { Button }
