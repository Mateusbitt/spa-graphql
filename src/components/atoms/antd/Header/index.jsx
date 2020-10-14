import React from 'react'
import { Layout } from 'antd'

const { Header: ADHeader } = Layout

const Header = ({ ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ADHeader {...props} />
  )
}

export { Header }
