import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form } from 'antd'

const StyledFormItem = styled(Form.Item)``

const ADFormItem = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledFormItem {...props}>
      {children}
    </StyledFormItem>
  )
}

ADFormItem.propTypes = {
  children: PropTypes.any,
}

export { ADFormItem }
