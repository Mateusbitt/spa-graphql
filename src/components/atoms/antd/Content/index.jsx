import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content: ADContent } = Layout

const Content = ({ children, ...props }) => {
  return (
    <ADContent
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      {children}
    </ADContent>
  )
}

Content.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Content }
