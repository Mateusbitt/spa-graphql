import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components'
import { usePersistedState } from 'hooks'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: row;

`

const Content = ({ t, i18n, toggleTheme }) => {
  const [lang, setLang] = usePersistedState('language', JSON.parse(localStorage.getItem('language')) || 'enUS')
  const [theme, setTheme] = usePersistedState('theme', JSON.parse(localStorage.getItem('theme')) || 'light')

  const changeSelect = () => {
    i18n.changeLanguage(lang === 'ptBR' ? 'enUS' : 'ptBR')
    setLang(lang === 'ptBR' ? 'enUS' : 'ptBR')
  }

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    toggleTheme()
  }

  return (
    <Wrapper>
      <Block>{t('molecules.Content.Home')}</Block>
      <Button text="Trocar Lingua" onClick={() => changeSelect()} />
      <Button text="Trocar Tema" onClick={() => changeTheme()} />
      <Link to="/login">Login</Link>
    </Wrapper>
  )
}

Content.propTypes = {
  toggleTheme: PropTypes.func,
  t: PropTypes.func,
  i18n: PropTypes.object,

}

export { Content }
