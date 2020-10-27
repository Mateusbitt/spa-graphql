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
import LogoExtended from '../../../../public/image/logo/dark/logo_extended.png'

const StyledBlock = styled(Block)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  height: 100vh;

  .logo {
    height: 100px;
    width: 300px;
    background-image: url(${LogoExtended});
    background-size: contain;
    background-repeat:no-repeat;
  }

  #register{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    color: #FFF;
  }

  .ant-form.ant-form-horizontal.sc-dlnjPT{
    width: 650px;

  .ant-form-item-label{
    width: 150px;
    text-align: start;
  }

  .ant-form-item-control-input-content{
  display: flex;
  justify-content: center;
  }
`

const StyledRegister = styled(Block)`

`

const RegisterPage = ({ onFinish, onFinishFailed }) => {
  return (
    <StyledBlock>
      <Block className="logo" />
      <StyledRegister>
        <h1 id="register">Create your account!</h1>
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
            <ADInput className="teste" />

          </ADFormItem>

          <ADFormItem
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please input your E-mail!' }]}
          >
            <ADInput className="teste" />

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
              Finish Registration
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
