import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from 'themes'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Menu, MenuItem, ADSwitch,
} from 'components'

const StyledSwitch = styled(ADSwitch)`
  .ant-switch-inner { color: ${({ theme }) => theme.colors.text[0]} !important };
`

const MenuStyled = styled(Menu)`
  color: ${({ theme }) => theme.colors.text[0]} !important };
  box-shadow: -5px 5px;
  background: rgba(30, 36, 61, 1);
  .ant-dropdown-link{
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    
  }
  #ant-dropdown-logout{
    border-bottom: none;
  }
`

const DropdownUser = ({ toggleTheme }) => {
  const history = useHistory()
  const { theme } = useContext(ThemeContext)

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    history.push('/login')
  }

  return (
    <MenuStyled theme={theme}>
      <MenuItem theme={theme} className="ant-dropdown-link">
        <StyledSwitch
          theme={theme}
          defaultChecked={JSON.parse(localStorage.getItem('theme')) === 'dark'}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </MenuItem>
      <MenuItem theme={theme} className="ant-dropdown-link">Change language</MenuItem>
      <MenuItem theme={theme} id="ant-dropdown-logout" className="ant-dropdown-link" onClick={() => logout()}>Logout</MenuItem>
    </MenuStyled>
  )
}

DropdownUser.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
}

export { DropdownUser }
