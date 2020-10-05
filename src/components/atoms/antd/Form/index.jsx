import React from 'react'
import { Form } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledForm = styled(Form)``

const ADForm = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledForm {...props}>
      {children}
    </StyledForm>
  )
}

ADForm.propTypes = {
  children: PropTypes.any.isRequired,
}

export { ADForm }
