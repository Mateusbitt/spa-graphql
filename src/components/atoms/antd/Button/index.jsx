import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from 'themes'

import { Button as antdButton } from 'antd'

const StyledAntdButton = styled(antdButton)`
  background: ${({ palette, theme }) => theme.colors[palette][1]} !important;
  color: ${({ theme }) => theme.colors.white[0]} !important;
  font-weight: bold;
  border-radius: 5px;
  border-color: ${({ palette, theme }) => theme.colors[palette][0]} !important;
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
  palette: PropTypes.string,
  children: PropTypes.any,
}

ADButton.defaultProps = {
  palette: 'primary',
}

export { ADButton }
