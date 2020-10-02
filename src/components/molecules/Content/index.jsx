import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components'
import { usePersistedState } from 'hooks'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: row;

`

const Content = () => {
  const [lang, setLang] = usePersistedState('language', JSON.parse(localStorage.getItem('language')) || 'enUS')
  const { i18n, t } = useTranslation()
  const changeSelect = () => {
    i18n.changeLanguage(lang === 'ptBR' ? 'enUS' : 'ptBR')
    setLang(lang === 'ptBR' ? 'enUS' : 'ptBR')
  }

  return (
    <Wrapper>
      <Block>{t('molecules.Content.Home')}</Block>
      <Button text="Trocar Lingua" onClick={() => changeSelect()} />
      <Link to="/login">Login</Link>
    </Wrapper>
  )
}

export { Content }
