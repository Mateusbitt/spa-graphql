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

const StyledRegister = styled(Block)`
`

const RegisterPage = ({ onFinish, onFinishFailed }) => {
  return (
    <StyledBlock>
      <StyledRegister>
        <h1>Register</h1>
        <ADForm
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <ADFormItem
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <ADInput />

          </ADFormItem>

          <ADFormItem
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please input your E-mail!' }]}
          >
            <ADInput />

          </ADFormItem>

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

          <ADFormItem
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <ADInputPassword />
          </ADFormItem>

          <ADFormItem
            label="Picture"
            name="picture"
            rules={[{ required: true, message: 'Please send your image!' }]}
          >
            <ADInput />
          </ADFormItem>

          <ADFormItem>
            <ADButton palette="primary" htmlType="submit">
              Register
            </ADButton>
          </ADFormItem>
        </ADForm>
      </StyledRegister>
    </StyledBlock>
  )
}

RegisterPage.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
}

export { RegisterPage }
