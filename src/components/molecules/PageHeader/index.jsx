import React from 'react'
import jwtDecode from 'jwt-decode'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import './styles.css'
import { Header } from 'components'
import { useQuery } from '@apollo/client'
import { ADDropdown } from '../../atoms/antd/Dropdown'
import { Users as UsersQuery } from '../../../gql'

const PageHeader = ({ toggle, collapsed }) => {
  const localStorageData = jwtDecode(localStorage.getItem('token'))
  const { id } = localStorageData.userData

  const { data, error, loading } = useQuery(UsersQuery, {
    variables: {
      id,
    },
  })

  if (error) return null
  if (loading) return <div>Loading...</div>
  const [user] = data.Users

  return (
    <Header id="PageHeader" className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        onClick: toggle,
      })}
      <ADDropdown loggedUser={user.name} />
    </Header>
  )
}

PageHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export { PageHeader }
