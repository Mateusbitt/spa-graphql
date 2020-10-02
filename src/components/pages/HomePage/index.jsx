import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { PageTemplate, Content, Block } from 'components'

const HomePage = ({ t }) => {
  return (
    <PageTemplate
      header={<Block>{t('pages.HomePage.Header')}</Block>}
      content={<Content />}
      footer={<Block>Footer</Block>}
    />
  )
}

HomePage.propTypes = {
  t: PropTypes.func,
}

export { HomePage }
