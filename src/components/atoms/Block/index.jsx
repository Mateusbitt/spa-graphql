import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'themes'

const StyledBlock = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[0]};
  background-color: ${({ theme }) => theme.colors.background[1]};
  font-weight: bold;
`

const Block = ({ ...props }) => {
  const { theme } = useContext(ThemeContext)
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (<StyledBlock theme={theme} {...props} />)
}

export { Block }
