import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import { Block, ADButton } from 'components'
import { usePersistedState } from 'hooks'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const Content = ({
  t, i18n, toggleTheme,
}) => {
  const [lang, setLang] = usePersistedState('language', JSON.parse(localStorage.getItem('language')) || 'enUS')
  const [theme, setTheme] = usePersistedState('theme', JSON.parse(localStorage.getItem('theme')) || 'light')
  const history = useHistory()

  const changeSelect = () => {
    i18n.changeLanguage(lang === 'ptBR' ? 'enUS' : 'ptBR')
    setLang(lang === 'ptBR' ? 'enUS' : 'ptBR')
  }

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    toggleTheme()
  }

  const Logout = () => {
    localStorage.clear()
    history.push('/login')
    return true
  }

  return (
    <Wrapper id="Content">
      <Block id="home">{t('molecules.Content.Home')}</Block>
      <ADButton onClick={() => changeSelect()}>Trocar Lingua</ADButton>
      <ADButton onClick={() => changeTheme()}>Trocar Tema</ADButton>
      <ADButton onClick={() => Logout()}>Logout</ADButton>
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
