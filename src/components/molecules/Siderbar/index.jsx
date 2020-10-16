import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'themes'
import { useHistory } from 'react-router-dom'

import {
  HomeFilled,
  UserOutlined,
  CommentOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import {
  Block, Sider, Menu, MenuItem, ADSwitch,
} from 'components'
import styled from 'styled-components'

const StyledSider = styled(Sider)`
  background-color: ${({ theme }) => theme.colors.background[0]};
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: ${({ theme }) => theme.colors.background[0]};
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.colors.background[2]};
}
  .logo {
    height: 32px;
    background-color: ${({ theme }) => theme.colors.background[0]};
    margin: 16px;
    margin-left: ${({ collapsed }) => collapsed ? '20px' : '16px'};
    background-image: url(${({ collapsed, theme }) => collapsed ? theme.logo.short : theme.logo.extended});
    background-size: contain;
    background-repeat:no-repeat;
  }
`
const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.text[0]} !important;
`
const StyledSwitch = styled(ADSwitch)`
  .ant-switch-inner { color: ${({ theme }) => theme.colors.text[0]} !important };
`

const Siderbar = ({ collapsed, toggleTheme }) => {
  const history = useHistory()
  const { theme } = useContext(ThemeContext)
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    history.push('/login')
  }
  const goToPath = (path) => {
    history.push(`/${path}`)
  }
  return (
    <StyledSider id="Sidebar" trigger={null} collapsible collapsed={collapsed} theme={theme}>
      <Block className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname.split('/')[1] || '1']}>
        <StyledMenuItem key="1" theme={theme} icon={<HomeFilled />} onClick={() => goToPath('')}>
          Home
        </StyledMenuItem>
        <StyledMenuItem key="users" theme={theme} icon={<UserOutlined />} onClick={() => goToPath('users')}>
          Users
        </StyledMenuItem>
        <StyledMenuItem key="chats" theme={theme} icon={<CommentOutlined />} onClick={() => goToPath('chats')}>
          Chat
        </StyledMenuItem>
        <StyledMenuItem key="4" theme={theme} icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </StyledMenuItem>
        <StyledMenuItem theme={theme} disabled>
          <StyledSwitch
            theme={theme}
            defaultChecked={JSON.parse(localStorage.getItem('theme')) === 'dark'}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </StyledMenuItem>
      </Menu>
    </StyledSider>
  )
}

Siderbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export { Siderbar }
