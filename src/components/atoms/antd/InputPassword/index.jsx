import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from 'antd'

const StyledPassword = styled(Input.Password)``

const ADInputPassword = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledPassword {...props}>
      {children}
    </StyledPassword>
  )
}

ADInputPassword.propTypes = {
  children: PropTypes.any,
}

export { ADInputPassword }
