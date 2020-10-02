import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block } from 'components'
import Routes from './Routes'

const Wrapper = styled(Block)``

const App = () => {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  )
}

// App.propTypes = {
//   children: PropTypes.any,
// }

export default App
