/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const styledInput = styled(Input)`
  
`

const ADInputIcon = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <styledInput {...props}>
      {children}
      <UserOutlined />
      <Input />
    </styledInput>
  )
}

ADInputIcon.propTypes = {
  children: PropTypes.any,
}

export { ADInputIcon }
