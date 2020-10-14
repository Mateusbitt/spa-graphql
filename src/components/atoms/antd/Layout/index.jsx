import React from 'react'
import { Layout as ADLayout } from 'antd'

const Layout = ({ ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ADLayout {...props} />
  )
}

export { Layout }
