import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Checkbox } from 'antd'

const StyledCheckbox = styled(Checkbox)``

const ADCheckbox = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledCheckbox {...props}>
      {children}
    </StyledCheckbox>
  )
}

ADCheckbox.propTypes = {
  children: PropTypes.any,
}

export { ADCheckbox }
