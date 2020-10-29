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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  height: 100vh;
  
  #register{
    display: flex;
    justify-content: center;
    color: #FFF;
  }

  #msg{
    text-align: center;
    padding-bottom: 10px;
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
const StyledBord = styled(Block)`
  border: solid rgba(0,255,255,0.2);
  border-radius: 4px;
  width: 700px;
  padding: 30px;
`

const StyledRegister = styled(Block)`

`

const RegisterPage = ({ onFinish, onFinishFailed }) => {
  return (
    <StyledBlock>
      <StyledBord>
        <StyledRegister>
          <h1 id="register">Create your account!</h1>
          <p id="msg">Please fill out the form below to complete the registration.</p>
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
              <ADInput className="teste" placeholder="Your full name" />

            </ADFormItem>

            <ADFormItem
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Please input your E-mail!' }]}
            >
              <ADInput className="teste" placeholder="Your email" />

            </ADFormItem>

            <ADFormItem
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <ADInput placeholder="Choose your user" />
            </ADFormItem>

            <ADFormItem
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <ADInputPassword placeholder="Choose your password" />
            </ADFormItem>

            <ADFormItem
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <ADInputPassword placeholder="Confirm your password" />
            </ADFormItem>

            <ADFormItem
              label="Picture"
              name="picture"
              rules={[{ required: true, message: 'Please send your image!' }]}
            >
              <ADInput placeholder="Set a profile photo" />
            </ADFormItem>

            <ADFormItem>
              <ADButton palette="primary" htmlType="submit">
                Finish Registration
              </ADButton>
            </ADFormItem>
          </ADForm>
        </StyledRegister>
      </StyledBord>
    </StyledBlock>
  )
}

RegisterPage.propTypes = {
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
}

export { RegisterPage }
