import React from 'react'
import PropTypes from 'prop-types'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import {
  Block, Sider, Menu, MenuItem,
} from 'components'

const Siderbar = ({ idPage, collapsed }) => {
  return (
    <Sider idPage={idPage} trigger={null} collapsible collapsed={collapsed}>
      <Block className="logo">breno</Block>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <MenuItem key="1" icon={<UserOutlined />}>
          nav 1
        </MenuItem>
        <MenuItem key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </MenuItem>
        <MenuItem key="3" icon={<UploadOutlined />}>
          nav 3
        </MenuItem>
      </Menu>
    </Sider>
  )
}

Siderbar.propTypes = {
  idPage: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export { Siderbar }
