import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form } from 'antd'
import { ThemeContext } from 'themes'

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text[0]};
  }
  .ant-checkbox-wrapper {
    color: ${({ theme }) => theme.colors.text[0]};
  }
`

const ADFormItem = ({ children, ...props }) => {
  const { theme } = useContext(ThemeContext)
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledFormItem theme={theme} {...props}>
      {children}
    </StyledFormItem>
  )
}

ADFormItem.propTypes = {
  children: PropTypes.any,
}

export { ADFormItem }
