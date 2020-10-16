import React from 'react'
import PropTypes from 'prop-types'
import {
  ADForm,
  ADFormItem,
  ADButton,
  ADInput,
  ADInputPassword,
  ADCheckbox,
} from 'components'

const LoginForm = ({ onFinish, onFinishFailed }) => {
  return (
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

      <ADFormItem name="remember" valuePropName="checked">
        <ADCheckbox>Remember me</ADCheckbox>
      </ADFormItem>

      <ADFormItem>
        <ADButton palette="primary" htmlType="submit">
          Sign-In
        </ADButton>
      </ADFormItem>
    </ADForm>
  )
}

LoginForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
}

export { LoginForm }
