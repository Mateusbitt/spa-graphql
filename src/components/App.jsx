import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block } from 'components'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from 'themes'

import Routes from './Routes'

const Wrapper = styled(Block)``

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  return (
    <Wrapper>
      <Routes
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
        i18n={i18n}
      />
    </Wrapper>
  )
}

// App.propTypes = {
//   children: PropTypes.any,
// }

export default App
