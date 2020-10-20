import React from 'react'
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import {
  Menu, MenuItem,
} from 'components'

const DropdownUser = () => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    history.push('/login')
  }

  return (
    <Menu>
      <MenuItem className="ant-dropdown-link">Change theme</MenuItem>
      <MenuItem className="ant-dropdown-link">Change language</MenuItem>
      <MenuItem className="ant-dropdown-link" onClick={() => logout()}>Logout</MenuItem>
    </Menu>
  )
}

// DropdownUser.propTypes = {
//   children: PropTypes.any,
// }

export { DropdownUser }
