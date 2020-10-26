import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from 'antd'

const StyledInput = styled(Input)``

const ADInputFile = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledInput {...props}>
      {children}
    </StyledInput>
  )
}

ADInputFile.propTypes = {
  children: PropTypes.any,
}

export { ADInputFile }
