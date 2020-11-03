import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ADForm,
  ADFormItem,
  ADButton,
  ADInputPassword,
  ADCheckbox,
  Block,
  ADInputIcon,
} from 'components'
import LogoExtended from '../../../../../public/image/logo/dark/logo_site.png'

// background: #405783;
const StyledBlock = styled(Block)`
  border: solid rgba(0,255,255,0.2);
  border-radius: 4px;
  height: 380px;
  width: 400px;
  padding: 30px;
  margin: 10px;

  .logo {
    height: 100px;
    width: auto;
    margin-bottom: 30px;
    background-image: url(${LogoExtended});
    background-size: contain;
    background-repeat:no-repeat;
  }

  .ant-form-item-control-input-content{
    display: flex;
    justify-content: center;
  }
`

const StyledLabel = styled(Block)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 20px;
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
          <ADInputIcon
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          />

          <ADFormItem
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <ADInputPassword />
          </ADFormItem>

          <StyledLabel>
            <ADFormItem name="remember" valuePropName="checked">
              <ADCheckbox>Remember me</ADCheckbox>
            </ADFormItem>

            <ADFormItem>
              <ADButton palette="primary" htmlType="submit">
                Sign-In
              </ADButton>
            </ADFormItem>

          </StyledLabel>

        </ADForm>
      </StyledBlock>
    </>

  )
}

LoginForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
}

export { LoginForm }
