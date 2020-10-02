import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { PageTemplate, Content, Block } from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Block>header</Block>}
      content={<Content />}
      footer={<Block>footer</Block>}
    />
  )
}

// HomePage.propTypes = {
//   children: PropTypes.any,
// }

export { HomePage }
