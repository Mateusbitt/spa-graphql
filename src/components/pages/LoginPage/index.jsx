import React from 'react'
import { LoginForm, GenericTemplate } from 'components'

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <GenericTemplate>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </GenericTemplate>
  )
}

export { LoginPage }
