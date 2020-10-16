import React from 'react'
import PropTypes from 'prop-types'
import { Themes, ThemeContext } from 'themes'
import { usePersistedState } from 'hooks'
import { CLIENT } from 'environment'

const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = usePersistedState('theme', JSON.parse(localStorage.getItem('theme')) || 'light')
  const theme = Themes[CLIENT] ? Themes[CLIENT][themeType] : Themes.default[themeType]

  const toggleTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export { ThemeProvider }
