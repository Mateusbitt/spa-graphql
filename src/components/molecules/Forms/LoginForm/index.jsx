import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ADForm,
  ADFormItem,
  ADButton,
  ADInput,
  ADInputPassword,
  ADCheckbox,
  Block,
} from 'components'
import logoExtended from '../../../../../public/image/logo/dark/logo_extended.png'

const StyledBlock = styled(Block)`
  border: solid rgba(0,255,255,0.2);
  border-radius: 4px;
  height: auto;
  width: 400px;
  padding: 30px;
  margin: 10px;

  .logo {
    height: 100px;
    width: auto;
    background-image: url(${logoExtended});
    background-size: contain;
    background-repeat:no-repeat;
  }

  .ant-form-item-control-input-content{
    display: flex;
    justify-content: center;
  }
`

const LoginForm = ({ onFinish, onFinishFailed }) => {
  return (
    <>
      <StyledBlock>
        <Block className="logo" />
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
      </StyledBlock>
      <Link to="/register">Don&apos;t have an account?</Link>
    </>

  )
}

LoginForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
}

export { LoginForm }
