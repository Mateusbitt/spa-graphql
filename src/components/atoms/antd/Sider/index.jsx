import React from 'react'
import { Layout } from 'antd'

const { Sider: ADSider } = Layout

const Sider = ({ ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ADSider {...props} />
  )
}

export { Sider }
