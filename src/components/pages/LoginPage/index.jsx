import React from 'react'
import { ApolloConsumer } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  LoginForm, GenericTemplate, adMessage, Block,
} from 'components'
import { UserLogin } from 'gql'

const StyledBlock = styled(Block)`
  width: 50%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem;
`

const LoginPage = () => {
  const history = useHistory()
  const onFinish = async (values, client) => {
    try {
      const data = (
        await client.mutate({
          mutation: UserLogin,
          variables: {
            username: values.username,
            password: values.password,
          },
        })
      )
      adMessage.success('Welcome!')
      localStorage.setItem('token', data.data.UserLogin.token)
      history.push('/')
    } catch (error) {
      if (error.message === 'GraphQL error: Invalid username or password!') {
        adMessage.error('Invalid username or password!')
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <GenericTemplate>
      <ApolloConsumer>
        {
          (client) => {
            return (
              <StyledBlock>
                <LoginForm
                  onFinish={(values) => onFinish(values, client)}
                  onFinishFailed={onFinishFailed}
                />
              </StyledBlock>
            )
          }
        }
      </ApolloConsumer>
    </GenericTemplate>
  )
}

export { LoginPage }
