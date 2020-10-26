import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  ADForm,
  ADFormItem,
  ADButton,
  ADInput,
  ADInputPassword,
  Block,
} from 'components'

const StyledBlock = styled(Block)`
`

const RegisterPage = ({ onFinish, onFinishFailed }) => {
  return (
    <StyledBlock>
      <h1>Register</h1>
      <ADForm
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <ADFormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <ADInput />
        </ADFormItem>

        <ADFormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <ADInputPassword />
        </ADFormItem>

        <ADFormItem>
          <ADButton palette="primary" htmlType="submit">
            Register
          </ADButton>
        </ADFormItem>
      </ADForm>
    </StyledBlock>
  )
}

RegisterPage.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
}

export { RegisterPage }
