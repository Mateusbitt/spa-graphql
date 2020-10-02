import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { GenericTemplate, Block } from 'components'

const LoginPage = () => {
  return (
    <GenericTemplate>
      <Block>Login</Block>
      <Link to="/">Home</Link>
    </GenericTemplate>
  )
}

// LoginPage.propTypes = {
//   children: PropTypes.any,
// }

export { LoginPage }
