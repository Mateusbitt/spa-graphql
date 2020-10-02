import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block } from 'components'
import { useTranslation } from 'react-i18next'
import Routes from './Routes'

const Wrapper = styled(Block)``

const App = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Routes t={t} />
    </Wrapper>
  )
}

// App.propTypes = {
//   children: PropTypes.any,
// }

export default App
