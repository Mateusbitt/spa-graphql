import React from 'react'
import { Block } from 'components'

const App = ({ color }) => {
  return (
    <Block color={color}>
      Breno
      {' '}
      {color}
    </Block>
  )
}

export default App
