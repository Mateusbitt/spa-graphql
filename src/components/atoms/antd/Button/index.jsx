import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from 'themes'

import { Button as antdButton } from 'antd'

const StyledAntdButton = styled(antdButton)`
  background: ${({ danger, theme }) => danger ? theme.colors.actions[3] : theme.colors.actions[0]} !important;
  color: ${({ danger, theme }) => danger ? theme.colors.text[1] : theme.colors.text[1]} !important;
`

const ADButton = ({ children, ...props }) => {
  const { theme } = useContext(ThemeContext)
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledAntdButton {...props} theme={theme}>
      {children}
    </StyledAntdButton>
  )
}

ADButton.propTypes = {
  children: PropTypes.any,
}

export { ADButton }
