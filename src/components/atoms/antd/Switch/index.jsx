import React, { useContext } from 'react'
import { Switch } from 'antd'
import { ThemeContext } from 'themes'
import styled from 'styled-components'

const StyledSwitch = styled(Switch)`
    background-color: ${({ theme }) => theme.colors.background[1]};
`

const ADSwitch = ({ ...props }) => {
  const { theme } = useContext(ThemeContext)
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSwitch theme={theme} {...props} />
  )
}

export { ADSwitch }
