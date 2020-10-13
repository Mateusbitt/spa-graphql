import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CheckLoggedInn } from 'utils'
import { PageTemplate, Content, Block } from 'components'

const StyledBlock = styled(Block)`
  background-color: ${({ theme }) => theme.colors.background[0]};
  color: ${({ theme }) => theme.colors.text[0]};
`

const HomePage = ({
  t, theme, toggleTheme, i18n, idPage,
}) => {
  CheckLoggedInn()
  return (
    <PageTemplate
      idPage={idPage}
      sider={<Block>Sider</Block>}
      header={<StyledBlock theme={theme}>{t('pages.HomePage.Header')}</StyledBlock>}
      content={<Content t={t} toggleTheme={toggleTheme} i18n={i18n} />}
      footer={<Block>Footer</Block>}
      theme={theme}
    />
  )
}

HomePage.propTypes = {
  idPage: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
}

export { HomePage }
