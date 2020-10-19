/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const ADDropdown = ({ loggedUser }) => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    history.push('/login')
  }

  const menu = (
    <Menu>
      <Menu.Item key="changeTheme">
        <a href="#">Change theme</a>
      </Menu.Item>
      <Menu.Item key="changeLanguage">
        <a href="#">Change language</a>
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => logout()}>
        <a href="#">Logout</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {loggedUser}
        {' '}
        <DownOutlined />
      </a>
    </Dropdown>
  )
}

ADDropdown.propTypes = {
  loggedUser: PropTypes.string.isRequired,
}

export { ADDropdown }
