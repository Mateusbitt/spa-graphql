import React from 'react'
import jwtDecode from 'jwt-decode'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import {
  Header, ADDropdown, DropdownUser,
} from 'components'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { Users as UsersQuery } from 'gql'

const StyledHeader = styled(Header)`
  padding: 0px 15px;
  display: flex;
  align-items: center;
  place-content: space-between;
`

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

  if (!user) return null

  return (
    <StyledHeader id="PageHeader" className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        onClick: toggle,
      })}
      {user && <ADDropdown title={user.name} items={<DropdownUser />} />}
    </StyledHeader>
  )
}

PageHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export { PageHeader }
