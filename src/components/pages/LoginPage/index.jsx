import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  LoginForm, GenericTemplate, adMessage, Block,
} from 'components'
import { UserLogin } from 'gql'

const StyledBlock = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height:100vh;
  background-color: ${({ theme }) => theme.colors.background[0]};
`

const LoginPage = ({
  theme,
}) => {
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
      localStorage.setItem('refreshToken', data.data.UserLogin.refreshToken)
      history.push('/')
    } catch (error) {
      if (error.message === 'GraphQL error: Invalid username or password!') {
        adMessage.error('Invalid username or password!')
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <GenericTemplate theme={theme}>
      <ApolloConsumer>
        {
          (client) => {
            return (
              <StyledBlock theme={theme}>
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

LoginPage.propTypes = {
  // idPage: PropTypes.string.isRequired,
  // t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  // toggleTheme: PropTypes.func.isRequired,
  // i18n: PropTypes.object.isRequired,
}

export { LoginPage }
