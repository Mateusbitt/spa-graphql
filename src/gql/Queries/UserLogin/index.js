import { gql } from '@apollo/client'

const UserLogin = gql`
query UserLogin($username: String!, $password: String!) {
  UserLogin (
    username: $username
    password: $password
  )
   {
    token
  }
}
`

export { UserLogin }
