import React from 'react'
import { Link } from 'react-router-dom'
import { Block } from 'components'

const Content = () => (
  <Block>
    <Block>Home</Block>
    <Link to="/login">Login</Link>
  </Block>
)

export { Content }
